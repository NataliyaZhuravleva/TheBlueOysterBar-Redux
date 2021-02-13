import React from 'react';
import PropTypes from 'prop-types';

function KegBeerDetail(props) {
  const { kegBeer } = props;
  return (
    <React.Fragment>
      <h1>Beer Details:</h1>
      <h3>{props.name}({kegBeer.brand}):</h3>
      <p><em>Price: </em>${kegBeer.price}</p>
      <p><em>Alcohol Content: </em>{kegBeer.alcoholContent}%</p>
      <p><em>Pints Left: </em>{kegBeer.pintsLeft}</p>
    </React.Fragment>
  );
}

KegBeerDetail.propTypes = {
  kegBeer: PropTypes.object
};

export default KegBeerDetail;