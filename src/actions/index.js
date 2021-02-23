import * as c from './ActionTypes';

export const deleteKegBeer = (id) =>({
  type: c.DELETE_KEGBEER,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addKegBeer = (kegBeer) => {
  const { name, brand, price, alcoholContent, pintsLeft, id } = kegBeer;
  return {
    type: c.ADD_KEGBEER,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pintsLeft: pintsLeft,
      id: id
  }
}

export const editing = ()=>({
  type: c.TOGGLE_UPDATE
});

export const selectedKegBeer = (kegBeer)=>({
  type: c.SELECT_KEGBEER,
  selectedKegBeer: kegBeer

});

export const deselectKegBeer = ()=>({
  type: c.DESELECT_KEGBEER
});

export const pintsLeft = (kegBeerToSell)=>{
  //const { name, brand, price, alcoholContent, pintsLeft, id } = kegBeerToSell;
  
  return {
    type: c.SELL_PINT,
    pintsLeft: kegBeerToSell
    //selectedkegBeer: kegBeerToSell
      // name: name,
      // brand: brand,
      // price: price,
      // alcoholContent: alcoholContent,
      // pintsLeft: pintsLeft-1,
      // id: id
  }
};
