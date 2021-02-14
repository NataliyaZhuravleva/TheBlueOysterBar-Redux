import React from 'react';
import PropTypes from 'prop-types';

function KegBeerDetail(props) {
  const { kegBeer, onClickingDelete, onClickingEdit } = props;
  return (
    <React.Fragment>
      <h1>Beer Details:</h1>
      <h3>{props.name}({kegBeer.brand}):</h3>
      <p><em>Price: </em>${kegBeer.price}</p>
      <p><em>Alcohol Content: </em>{kegBeer.alcoholContent}%</p>
      {kegBeer.pintsLeft === 0 ?
        <p>Out of Stock</p>
        : <p><em>Pints Left: </em>{kegBeer.pintsLeft}</p>
      }
      <hr />
      {kegBeer.pintsLeft > 0 ? <button onClick={props.onClickingSell}>Sell a pint</button> : null}
      <button onClick={() => onClickingEdit()}>Update Beer</button>
      <button onClick={() => onClickingDelete(kegBeer.id)}>Delete Beer</button>

    </React.Fragment>
  );
}

KegBeerDetail.propTypes = {
  kegBeer: PropTypes.object,
  onClickingSell: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default KegBeerDetail;