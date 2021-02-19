import * as actions from './../../actions';

describe('the blue oyster bar actions', () => {

  it('deleteKegBeer should create DELETE_KEGBEER action', () => {
    expect(actions.deleteKegBeer(1)).toEqual({
      type: 'DELETE_KEGBEER',
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addKegBeer should create ADD_KEGBEER action', () => {
    expect(actions.addKegBeer({ name: 'Guinness Blonde', brand: 'Guinness', price: 4.99, alcoholContent: 5.0, id: 1 })).toEqual({
      type: 'ADD_KEGBEER',
      name: 'Guinness Blonde',
      brand: 'Guinness',
      price: 4.99,
      alcoholContent: 5.0,
      id: 1
    })
  })
});