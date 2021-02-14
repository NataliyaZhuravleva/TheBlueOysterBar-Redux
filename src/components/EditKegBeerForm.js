import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditKegBeerForm(props) {
  const {kegBeer} = props;

  function handleEditKegBeerFormSubmission(event){
    event.preventDefault();
    props.onEditKegBeer({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      pintsLeft: kegBeer.pintsLeft,
      id: kegBeer.id
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler = {handleEditKegBeerFormSubmission}
        buttonText="Update Beer" />
    </React.Fragment>
  )
}

EditKegBeerForm.propTypes = {
  kegBeer: PropTypes.object,
  onEditKegBeer: PropTypes.func
}

export default EditKegBeerForm;