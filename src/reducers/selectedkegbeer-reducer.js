/* eslint-disable import/no-anonymous-default-export */
import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { selectedKegBeer } = action;
  //console.log(selectedKegBeer);
  switch (action.type) {
    case c.SELECT_KEGBEER:
      return selectedKegBeer
    case c.DESELECT_KEGBEER:
      return null;
    case c.SELL_PINT:
      state.pintsLeft--
      return state;
    default:
      return state;
    }
}