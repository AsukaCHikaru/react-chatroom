import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from "react-router-dom";

import Header from "./Header";
import Lobby from "./Lobby";
import Chatroom from "./Chatroom";
import GroupChatList from "./GroupChatList";
import SoloChatList from "./SoloChatList";

// const mapStateToProps = state => {
// };

const mapDispatchToProps = {
};

const LayoutComponent = ({}) => {
  return (
    <div className="layout-container">
      <Header />
      <Route path="/" exact component={Lobby} />
      <Route path="/galaxies" component={GroupChatList} />
      <Route path="/plants" component={SoloChatList} />
    </div>
  );
}

export default connect(null, mapDispatchToProps)(LayoutComponent);