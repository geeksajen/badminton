import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

// 包住只有登入會員才能進入的頁面（例如個人專區）。
export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center text-slate-400">
        載入中…
      </div>
    )
  }

  if (!user) {
    // 把使用者原本想去的頁面記下來，登入後可導回。
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}
