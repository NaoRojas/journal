
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  firebaseAuth,
} from '@/firebase/config'
import { updateProfile } from 'firebase/auth';

export const startLoginEmailPassword = ({ email, password }) => {
  console.log(email, password)
  return signInWithEmailAndPassword(firebaseAuth, email, password)
    .then(({ user }) => {

      return {
        ok: true,
        uid: user.uid,
        name: user.displayName,
        email: user.email
      }
    })
    .catch(e => {
      return {
        ok: false,
        errorMessage: e.message
      }
    })
}

export const startRegisterWithEmailPasswordName = ({ name, email, password }) => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then(({ user }) => {
      console.log(user);
      updateProfile(user, { displayName: name })
      return {
        ok: true,
        uid, email, name
      }
    })
    .catch(e => {
      console.log(e);
      return {
        ok: false,
        errorMessage: e.message
      }
    })
}
