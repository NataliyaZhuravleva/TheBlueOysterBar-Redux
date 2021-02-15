import React from 'react';
import PropTypes from 'prop-types';

function KegBeer(props) {

  return (
    <React.Fragment>
      <div onClick={() => props.whenKegBeerClicked(props.id)}>
        <h3 style={{color: '#ff3358'}}>{props.name}({props.brand}):</h3>
        {/* price handling */}
      {props.price<=3 ?
      <p >Price: <em style={{color: 'red'}}>${props.price}<br />Beer on Sale!</em></p>
      : props.price>=15 ?
      <p >Price: <em style={{color: 'red'}}>${props.price}<br />Craft Beer!</em></p>
      : <p>Price: <em>${props.price}</em></p>
      }
      
      {/* alcoholContent handling */}
      {props.alcoholContent>=7 ?
        <p >Alcohol Content: <em style={{color: 'red'}}>{props.alcoholContent}%<br />Strong beer! Don't sell more than 3 pints per person!</em></p>
        :  <p>Alcohol Content: <em>{props.alcoholContent}%</em></p>
      }
     
      {/* pints Left handling */}
      {props.pintsLeft === 0 ?
        <p style={{color: 'red'}}>Out of Stock</p>
        : props.pintsLeft<10 ?
        <p >Pints Left: <em style={{color: 'red'}}>{props.pintsLeft}!<br />Almost Empty</em></p>
        : <p><em>Pints Left: </em>{props.pintsLeft}</p>
      }
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