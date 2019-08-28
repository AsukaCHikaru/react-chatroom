import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from "./Header";
import "../style/GroupChatListView.css";

export default class GroupChatListListView extends Component {
  render () {
    return (
      <div className="chatroom-list-container">
        <Header />
        
      </div>
    );
  };
};

GroupChatListListView.defaultProps = {

};

GroupChatListListView.propTypes = {

};