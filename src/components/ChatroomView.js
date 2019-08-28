import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from "./Header";

import "../style/ChatroomView.css"

const mapStateToProps = state => {
};

const mapDispatchToProps = {
};

const ChatroomView = ({}) => {
  return (
    <div className="chatroom-container">
      <Header />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatroomView);