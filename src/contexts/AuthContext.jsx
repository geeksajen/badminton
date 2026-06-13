import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
} from 'firebase/auth'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { auth, db } from '../firebase/config'
import { COACH_STATUS, isSystemAdmin as checkSystemAdmin } from '../config'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  // profile = Firestore users/{uid} 文件（存放 coach_status 等角色資訊）
  const [profile, setProfile] = useState(null)
  const [profileLoading, setProfileLoading] = useState(true)

  // 只在掛載時訂閱一次 Firebase 的登入狀態，依賴陣列為空，避免無窮迴圈。
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  // 載入（或第一次自動建立）使用者的 users/{uid} 文件。
  // 新使用者一律以「一般使用者」(coach_status: 'none') 建立 —— 沒有人能自建成教練。
  const loadProfile = useCallback(async (u) => {
    if (!u) {
      setProfile(null)
      setProfileLoading(false)
      return
    }
    setProfileLoading(true)
    try {
      const ref = doc(db, 'users', u.uid)
      const snap = await getDoc(ref)
      if (snap.exists()) {
        setProfile({ id: snap.id, ...snap.data() })
      } else {
        const data = {
          email: u.email || '',
          display_name: u.displayName || '',
          coach_status: COACH_STATUS.NONE,
          created_at: serverTimestamp(),
        }
        await setDoc(ref, data)
        setProfile({ id: u.uid, ...data })
      }
    } catch (err) {
      // 若 Firestore 規則尚未發佈（users 集合被預設拒絕），不擋畫面：
      // 當作一般使用者，最多就是看不到教練申請 / 後台功能。
      console.error('載入使用者身分失敗（請確認 firestore.rules 已發佈）', err)
      setProfile(null)
    } finally {
      setProfileLoading(false)
    }
  }, [])

  // 依賴 user?.uid：登入者變動時才重抓 profile，不會無窮迴圈。
  useEffect(() => {
    loadProfile(user)
  }, [user, loadProfile])

  const refreshProfile = useCallback(() => loadProfile(user), [user, loadProfile])

  const isSystemAdmin = useMemo(() => checkSystemAdmin(user), [user])
  const isCoach = useMemo(
    () => profile?.coach_status === COACH_STATUS.APPROVED,
    [profile],
  )
  // staff = 可進教練後台（管理課程 / 報名）的人：系統管理員或已核准教練。
  const isStaff = isSystemAdmin || isCoach

  const register = async (email, password, displayName) => {
    const cred = await createUserWithEmailAndPassword(auth, email, password)
    if (displayName) {
      await updateProfile(cred.user, { displayName })
      setUser({ ...cred.user })
    }
    return cred.user
  }

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const cred = await signInWithPopup(auth, provider)
    return cred.user
  }

  const logout = () => signOut(auth)

  const value = {
    user,
    loading,
    profile,
    profileLoading,
    isSystemAdmin,
    isCoach,
    isStaff,
    refreshProfile,
    register,
    login,
    loginWithGoogle,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth 必須在 <AuthProvider> 內使用')
  return ctx
}
