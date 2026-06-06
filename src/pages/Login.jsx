import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

// 把 Firebase Auth 的錯誤碼轉成中文白話訊息。
function friendlyError(code) {
  switch (code) {
    case 'auth/invalid-email':
      return 'Email 格式不正確。'
    case 'auth/missing-password':
      return '請輸入密碼。'
    case 'auth/weak-password':
      return '密碼太短，請至少 6 個字。'
    case 'auth/email-already-in-use':
      return '這個 Email 已經註冊過了，請直接登入。'
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return 'Email 或密碼錯誤。'
    case 'auth/too-many-requests':
      return '嘗試次數太多，請稍後再試。'
    default:
      return '操作失敗，請稍後再試。'
  }
}

export default function Login() {
  const { login, register } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const redirectTo = location.state?.from?.pathname || '/'

  const [mode, setMode] = useState('login') // 'login' | 'register'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const isRegister = mode === 'register'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      if (isRegister) {
        await register(email.trim(), password, name.trim())
      } else {
        await login(email.trim(), password)
      }
      navigate(redirectTo, { replace: true })
    } catch (err) {
      setError(friendlyError(err.code))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="mx-auto mt-6 max-w-md">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-center text-2xl font-bold text-slate-800">
          {isRegister ? '註冊新帳號' : '會員登入'}
        </h1>
        <p className="mt-1 text-center text-sm text-slate-500">
          {isRegister ? '建立帳號後即可報名課程' : '登入後即可報名與管理課程'}
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {isRegister && (
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                姓名
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="王小明"
                className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
              />
            </div>
          )}

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              autoComplete="email"
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              密碼
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              placeholder="至少 6 個字"
              autoComplete={isRegister ? 'new-password' : 'current-password'}
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            />
          </div>

          {error && (
            <div className="rounded-xl bg-rose-50 px-3 py-2 text-sm text-rose-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:opacity-60"
          >
            {submitting ? '處理中…' : isRegister ? '註冊' : '登入'}
          </button>
        </form>

        <div className="mt-5 text-center text-sm text-slate-500">
          {isRegister ? '已經有帳號了？' : '還沒有帳號？'}
          <button
            onClick={() => {
              setMode(isRegister ? 'login' : 'register')
              setError('')
            }}
            className="ml-1 font-semibold text-brand-700 hover:underline"
          >
            {isRegister ? '改用登入' : '立即註冊'}
          </button>
        </div>
      </div>
    </div>
  )
}
