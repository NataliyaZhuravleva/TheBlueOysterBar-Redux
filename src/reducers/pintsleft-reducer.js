/* eslint-disable import/no-anonymous-default-export */
import * as c from './../actions/ActionTypes';
export default (state = {}, action) => {
 
  switch (action.type) {
    case c.SELL_PINT:
      let kegBeerState = {...state};
      kegBeerState.pintsLeft--;
      return kegBeerState;
    default:
      return state;
  }
}