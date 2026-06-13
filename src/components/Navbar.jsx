import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { roleLabel } from '../config'

export default function Navbar() {
  const { user, profile, isStaff, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  return (
    <nav className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold text-brand-700">
          <span className="text-2xl">🏸</span>
          <span>羽球課程報名</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            to="/"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
          >
            首頁
          </Link>

          {user && (
            <Link
              to="/dashboard"
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
            >
              個人專區
            </Link>
          )}

          {isStaff && (
            <Link
              to="/admin"
              className="rounded-lg px-3 py-2 text-sm font-medium text-brand-700 hover:bg-brand-50"
            >
              教練後台
            </Link>
          )}

          {user ? (
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="hidden rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 sm:inline">
                {roleLabel(user, profile)}
              </span>
              <button
                onClick={handleLogout}
                className="rounded-lg bg-slate-800 px-3 py-2 text-sm font-medium text-white hover:bg-slate-700"
              >
                登出
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="rounded-lg bg-brand-600 px-3 py-2 text-sm font-medium text-white hover:bg-brand-700"
            >
              登入
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
