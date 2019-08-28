import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from "./Header";

import "../style/Chatroom.css"

const mapStateToProps = state => {
};

const mapDispatchToProps = {
};

const Chatroom = ({}) => {
  return (
    <div className="chatroom-container">
      <Header />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);