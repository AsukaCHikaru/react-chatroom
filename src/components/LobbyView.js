import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import "../style/LobbyView.css";

import Header from "./Header";
import ChatModeItem from "./ChatModeItem";

const mapStateToProps = state => {
};

const mapDispatchToProps = {
};

const LobbyView = ({}) => {
  return (
    <div className="lobby-container">
      <Header />
      <div className="chat-mode-item-list-container">
        <Link to="/universe">
          <ChatModeItem></ChatModeItem>
        </Link>
        <Link to="/galaxies">
          <ChatModeItem></ChatModeItem>
        </Link>
        <Link to="/planets">
          <ChatModeItem></ChatModeItem>
        </Link>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LobbyView);