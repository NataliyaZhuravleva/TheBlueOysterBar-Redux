/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Header from './Header';
import KegBeersControl from './KegBeersControl';

function App(){

  const myStyledComponentStyles = {
    backgroundColor: '#c4f4ef',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  }
  
  return (
    <React.Fragment>
      <div style={myStyledComponentStyles}>
      <Header />
      <KegBeersControl />
      </div>
    </React.Fragment>
  )
}

export default App;