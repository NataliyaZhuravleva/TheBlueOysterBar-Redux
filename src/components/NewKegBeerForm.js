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
          name="price"
          placeholder="Beer Price($/pint)" />
        <input
          type="number"
          name="alcoholContent"
          placeholder="Beer Alcohol Content(%)" />
      </form>
    </React.Fragment>
  )
}

NewKegBeerForm.propTypes = {
  onNewKegBeerCreation: PropTypes.func
}

export default NewKegBeerForm;