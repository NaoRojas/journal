import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '@/firebase/config'
import { useDispatch, useSelector } from 'react-redux'
import { logout, login } from '@/store/auth/authSlice'

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async (user) => {
      console.log('onAuthStateChanged', user)
      if (!user) return dispatch(logout())
      const { uid, displayName, email, photoURL } = user
      dispatch(login({ uid, displayName, email, photoURL }))
    })
  }, [])

  return {
    status
  }
}