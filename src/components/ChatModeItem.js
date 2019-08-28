import React, { Component } from 'react';
import { connect } from 'react-redux';

import "../style/ChatModeItem.css";

const mapStateToProps = state => {
};

const mapDispatchToProps = {
};

const ChatModeItem = ({}) => {
  return (
    <button className="chat-mode-item-container">

    </button>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatModeItem);