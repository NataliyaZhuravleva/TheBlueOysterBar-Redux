import React from 'react';
import KegBeer from './KegBeer';
import PropTypes from 'prop-types';

function KegBeerList(props) {
  
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.kegBeerList).map((kegBeer) =>
        <KegBeer
          whenKegBeerClicked = {props.onKegBeerSelection}
          name={kegBeer.name}
          brand={kegBeer.brand}
          price={kegBeer.price}
          alcoholContent={kegBeer.alcoholContent}
          pintsLeft={kegBeer.pintsLeft}
          id={kegBeer.id}
          key={kegBeer.id}/>
      )}
    </React.Fragment>
  );
}

KegBeerList.propTypes={
  kegBeerList: PropTypes.object,
  onKegBeerSelection: PropTypes.func
}

export default KegBeerList;