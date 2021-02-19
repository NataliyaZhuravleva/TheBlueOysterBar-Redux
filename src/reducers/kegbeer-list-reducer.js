/* eslint-disable import/no-anonymous-default-export */
export default (state = {}, action) => {
  const { name, brand, price, alcoholContent, id } = action;
  switch (action.type) {
    case 'ADD_KEGBEER':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          alcoholContent: alcoholContent,
          id: id
        }
      });
    default:
      return state;
  }
};