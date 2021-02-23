/* eslint-disable import/no-anonymous-default-export */
import * as c from './../actions/ActionTypes';
export default (state = {}, action) => {
  const { name, brand, price, alcoholContent, pintsLeft, id } = action;
  
  switch (action.type) {
    case c.ADD_KEGBEER:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          alcoholContent: alcoholContent,
          pintsLeft: pintsLeft,
          id: id
        }
      });
    case c.DELETE_KEGBEER:
      let newState={...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
};