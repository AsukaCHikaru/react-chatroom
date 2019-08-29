import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";

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
  return (
    <buttpn className="header-button">
      <FontAwesomeIcon icon={faBars} />
    </buttpn>
  )
};
const renderRightBtn = () => {
  return (
    <buttpn className="header-button">
      <FontAwesomeIcon icon={faComment} />
    </buttpn>
  );
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