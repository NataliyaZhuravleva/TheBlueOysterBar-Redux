/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import headerImg from './../img/header-img.png';

function Header() {

  const myStyledComponentStyles = {
    color: '#4183c2',
    fontFamily: 'sans-serif',
  }
  
  return (
    <React.Fragment>
      <div style={myStyledComponentStyles}>
        <img src={headerImg} alt="An image of the blue oyster bar sign" />
        <h1>The Blue Oyster Bar</h1>
      </div>
    </React.Fragment>
  )
}

export default Header;