import React from 'react';
import PropTypes from 'prop-types';

function KegBeer(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegBeerClicked(props.id)}>
        <h3>{props.name}({props.brand}):</h3>
        <p><em>Price: </em>${props.price}</p>
        <p><em>Alcohol Content: </em>{props.alcoholContent}%</p>
        <p><em>Pints Left: </em>{props.pintsLeft}</p>
        <hr />
      </div>
    </React.Fragment>
  );
}

KegBeer.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  pintsLeft: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenKegBeerClicked: PropTypes.func
};

export default KegBeer;