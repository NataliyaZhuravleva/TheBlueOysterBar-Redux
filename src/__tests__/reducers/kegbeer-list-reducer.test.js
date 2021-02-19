import kegBeerListReducer from '../../reducers/kegbeer-list-reducer';

describe('kegBeerListReducer', () => {
  let action;
  const kegBeerData = {
    name: 'Guinness Blonde',
    brand: 'Guinness',
    price: 6.99,
    alcoholContent: 5.0,
    id: 1
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegBeerListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg beer data to masterKegBeerList', () => {
    const { name, brand, price, alcoholContent, id } = kegBeerData;
    action = {
      type: 'ADD_KEGBEER',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      id: id
    };
    expect(kegBeerListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        id: id
      }
    });
  });
});