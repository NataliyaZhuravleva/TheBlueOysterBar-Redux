import React from 'react';
import PropTypes from 'prop-types';

function KegBeerDetail(props) {
  const { kegBeer, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Beer Details:</h1>
      <h3>{props.name}({kegBeer.brand}):</h3>
      <p><em>Price: </em>${kegBeer.price}</p>
      <p><em>Alcohol Content: </em>{kegBeer.alcoholContent}%</p>
      <p><em>Pints Left: </em>{kegBeer.pintsLeft}</p>
      <button onClick={()=> onClickingDelete(kegBeer.id) }>Delete Beer</button>
    </React.Fragment>
  );
}

KegBeerDetail.propTypes = {
  kegBeer: PropTypes.object, 
  onClickingDelete: PropTypes.func
};

export default KegBeerDetail;