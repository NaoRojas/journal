import { setMenuItems } from "./menuSlice";

export const setMenuItemsNavBar = (month) => {
  return async (dispatch, getState) => {
    try {
      const { entries } = getState().journal
      dispatch(setMenuItems({ entries }))
    }
    catch (error) {
      console.log('error', error)
    }
  }

}