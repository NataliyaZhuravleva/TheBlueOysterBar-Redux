import selectedKegBeerReducer from '../../reducers/selectedkegbeer-reducer';
import * as c from '../../actions/ActionTypes';

describe("formVisibleReducer", () => {
  let action;
  const kegBeerData = {
    name: 'Guinness Blonde',
    brand: 'Guinness',
    price: 4.99,
    alcoholContent: 5.0,
    pintsLeft: 124,
    id: 1
  }

  
  test('Should return default state if no action type is recognized', () => {
    expect(selectedKegBeerReducer(null, { type: null })).toEqual(null);
  });

  test('Should successfully return a keg beer', ()=>{
    const { name, brand, price, alcoholContent, pintsLeft, id } = kegBeerData;
    action = {
      type: c.SELECT_KEGBEER,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pintsLeft: pintsLeft,
      id: id
    };
    expect(selectedKegBeerReducer(null, action)).toEqual({
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pintsLeft: pintsLeft,
      id: id
    });
  });
});