import React from 'react';
import PropTypes from 'prop-types';

function KegBeerDetail(props) {
  const { kegBeer, onClickingDelete, onClickingEdit } = props;
  
  return (
    <React.Fragment>
      <h1 style={{color: '#575B56'}}>Beer Details:</h1>
      <h3 style={{color: '#ff3358'}}>{kegBeer.name}({kegBeer.brand}):</h3>

      {/* price handling */}
      {kegBeer.price<=3 ?
      <p >Price: <em style={{color: 'red'}}>${kegBeer.price}<br />Beer on Sale!</em></p>
      : kegBeer.price>=15 ?
      <p >Price: <em style={{color: 'red'}}>${kegBeer.price}<br />Craft Beer!</em></p>
      : <p>Price: <em>${kegBeer.price}</em></p>
      }
      
      {/* alcoholContent handling */}
      {kegBeer.alcoholContent>=7 ?
        <p >Alcohol Content: <em style={{color: 'red'}}>{kegBeer.alcoholContent}%<br />Strong beer! Don't sell more than 3 pints per person!</em></p>
        :  <p>Alcohol Content: <em>{kegBeer.alcoholContent}%</em></p>
      }
          
      {/* pints Left handling */}
      {kegBeer.pintsLeft === 0 ?
        <p style={{color: 'red'}}>Out of Stock</p>
        : kegBeer.pintsLeft<10 ?
        <p >Pints Left: <em style={{color: 'red'}}>{kegBeer.pintsLeft}!<br />Almost Empty</em></p>
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