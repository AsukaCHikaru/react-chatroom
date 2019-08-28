import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from "./Header";
import "../style/SoloChatListView.css";

export default class SoloChatListView extends Component {
  render () {
    return (
      <div className="chatroom-list-container">
        <Header />
        
      </div>
    );
  };
};

SoloChatListView.defaultProps = {

};

SoloChatListView.propTypes = {

};