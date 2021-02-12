/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import headerImg from './../img/header-img.png';

function Header(){
  return (
    <React.Fragment>
      <h1>The Blue Oyster Bar</h1>
      <img src={headerImg} alt="An image of the blue oyster bar sign" />;
    </React.Fragment>
  )
}

export default Header;