import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewKegBeerForm(props) {
  function handleNewKegBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewKegBeerCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      pintsLeft: 2,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewKegBeerFormSubmission}
        buttonText="Add Beer to List" />
    </React.Fragment>
  )
}

NewKegBeerForm.propTypes = {
  onNewKegBeerCreation: PropTypes.func
}

export default NewKegBeerForm;