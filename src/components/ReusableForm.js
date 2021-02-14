import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;