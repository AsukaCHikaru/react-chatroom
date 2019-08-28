import React, { Component } from 'react';
import { connect } from 'react-redux';

import { NAME } from "../constants/string";
import { move } from "../services/action";
import '../style/Header.css';

const mapStateToProps = state => {
  const { location } = state;
  return {
    location
  };
};

const mapDispatchToProps = {
  move
};

const renderLeftBtn = () => {
  return <buttpn></buttpn>
};
const renderRightBtn = () => {
  return <buttpn></buttpn>
};

const Header = ({ location }) => {
  return (
    <header>
      {renderLeftBtn()}
      <div className="header-title-wrapper">
        <h1>{NAME.LOCATION[location]}</h1>
      </div>
      {renderRightBtn()}
    </header>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);