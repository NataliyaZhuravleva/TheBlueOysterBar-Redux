/* eslint-disable import/no-anonymous-default-export */
import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { selectedKegBeer } = action;
  switch (action.type) {
    case c.SELECT_KEGBEER:
      return selectedKegBeer
    case c.DESELECT_KEGBEER:
      return null;
    default:
      return state;
  }
}