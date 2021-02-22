/* eslint-disable import/no-anonymous-default-export */
import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  //const { name, brand, price, alcoholContent, pintsLeft, id } = action;
  const {selectedKegBeer} = action;
  switch (action.type) {
    case c.SELECT_KEGBEER:
      
      return  selectedKegBeer//{
        // name: name,
        // brand: brand,
        // price: price,
        // alcoholContent: alcoholContent,
        // pintsLeft: pintsLeft,
        // id: id
        
      //}
      case c.DESELECT_KEGBEER:
        return null;  
    default:
      return state;
  }
}