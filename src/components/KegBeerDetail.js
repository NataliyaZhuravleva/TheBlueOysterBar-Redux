import React from 'react';
import PropTypes from 'prop-types';

function KegBeerDetail(props){
  const {kegBeer} = props;
  return(
    <React.Fragment>
      <h1>Beer Details:</h1>
      <h3>{props.name}({props.brand}):</h3>
      <p><em>Price: </em>${props.price}</p>
      <p><em>Alcohol Content: </em>{props.alcoholContent}%</p>
      <p><em>Pints Left: </em>{props.pintsLeft}</p>
    </React.Fragment>
  );
}

KegBeerDetail.propTypes={
  kegBeer: PropTypes.object
};

export default KegBeerDetail;