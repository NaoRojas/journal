import { checkingCredentials, logout, login } from '@/store/auth/authSlice';
import { startRegisterWithEmailPasswordName, startLoginEmailPassword } from '@/firebase/providers';

export const checkingAuth = (email = "", password = "") => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
  }
}


export const loginUser = ({ email, password }) => {
  return async (dispatch) => {
    console.log(email, password)
    dispatch(checkingCredentials())
    const {
      ok,
      uid,
      name,
      errorMessage
    } = await startLoginEmailPassword(
      { email, password }
    )

    if (!ok) {
      return dispatch(login({
        errorMessage: 'Email or password incorrect'
      }))
    }
    dispatch(login({ uid, email, name }))
  }
}

export const registerUser = ({ name, email, password }) => {
  console.log(name, email, password);
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const {
      ok,
      uid,
      errorMessage
    } = await startRegisterWithEmailPasswordName(
      { name, email, password }
    )

    if (!ok) {
      return dispatch(logout({ errorMessage }))
    }
    dispatch(login({ uid, email, name }))
  }
}