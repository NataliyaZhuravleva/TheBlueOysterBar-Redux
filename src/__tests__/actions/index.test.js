import * as actions from './../../actions';

describe ('the blue oyster bar actions', ()=>{
  it('deleteKegBeer should create DELETE_KEGBEER action', ()=>{
    expect(actions.deleteKegBeer(1)).toEqual({
      type: 'DELETE_KEGBEER',
      id: 1
    });
  });
});