import * as actions from './../../actions';
import * as c from '../../actions/ActionTypes';

describe('the blue oyster bar actions', () => {

  it('deleteKegBeer should create DELETE_KEGBEER action', () => {
    expect(actions.deleteKegBeer(1)).toEqual({
      type: c.DELETE_KEGBEER,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addKegBeer should create ADD_KEGBEER action', () => {
    expect(actions.addKegBeer({ name: 'Guinness Blonde', brand: 'Guinness', price: 4.99, alcoholContent: 5.0, pintsLeft: 124, id: 1 })).toEqual({
      type: c.ADD_KEGBEER,
      name: 'Guinness Blonde',
      brand: 'Guinness',
      price: 4.99,
      alcoholContent: 5.0,
      pintsLeft: 124,
      id: 1
    })
  })
});