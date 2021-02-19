export const deleteKegBeer = id =>({
  type: 'DELETE_KEGBEER',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addKegBeer = (kegBeer) => {
  const { name, brand, price, alcoholContent, id } = kegBeer;
  return {
    type: 'ADD_KEGBEER',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      id: id
  }
}