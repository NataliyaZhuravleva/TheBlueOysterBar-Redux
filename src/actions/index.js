import * as c from './ActionTypes';

export const deleteKegBeer = id =>({
  type: c.DELETE_KEGBEER,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addKegBeer = (kegBeer) => {
  const { name, brand, price, alcoholContent, id } = kegBeer;
  return {
    type: c.ADD_KEGBEER,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      id: id
  }
}