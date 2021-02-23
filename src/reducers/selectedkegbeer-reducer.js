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
      let kegBeerState = {...state};
      console.log(kegBeerState);
      kegBeerState.pintsLeft--;
      //selectedKegBeer.pintsLeft--;
      return kegBeerState;
      //return selectedKegBeer;
    default:
      return state;
      
    }
    
     
}