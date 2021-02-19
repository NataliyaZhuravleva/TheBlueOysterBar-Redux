/* eslint-disable import/no-anonymous-default-export */

import * as c from './../actions/ActionTypes';
export default (state = {}, action) => {
  //const { name, brand, price, alcoholContent, pintsLeft, id } = action;
  switch (action.type) {
    case c.SELL_PINT:
      console.log(state);
      let kegBeerState = {...state};
      console.log(kegBeerState);
      kegBeerState.pintsLeft--;
      return kegBeerState;
    // case c.SELL_PINT:
    //   return Object.assign({}, state, {

    //     name: name,
    //     brand: brand,
    //     price: price,
    //     alcoholContent: alcoholContent,
    //     pintsLeft: pintsLeft - 1,
    //     id: id
    //   });
     
    default:
      return state;
  }
}