import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKegBeerForm(props) {
  function handleNewKegBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewKegBeerCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      pintsLeft: 124,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegBeerFormSubmission}>
        <input
          type="text"
          name="name"
          placeholder="Beer Name" />
        <input
          type="text"
          name="brand"
          placeholder="Beer Brand" />
        <input
          type="number"
          step="0.01"
          name="price"
          placeholder="Beer Price($/pint)" />
        <input
          type="number"
          step="0.1"
          name="alcoholContent"
          placeholder="Beer Alcohol Content(%)" />
        <button type='submit'>Add Beer to List</button>
      </form>
    </React.Fragment>
  )
}

NewKegBeerForm.propTypes = {
  onNewKegBeerCreation: PropTypes.func
}

export default NewKegBeerForm;