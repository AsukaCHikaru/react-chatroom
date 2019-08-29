import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { DESCRIPTION, NAME } from "../constants/string";
import ChatroomItem from "./ChatroomItem";
import { move } from "../services/action";
import "../style/GroupChatList.css";

const mapStateToProps = state => {
};

const mapDispatchToProps = {
  move
};

const renderCreateGroupChatBtn = move => {
  return (
    <Link to="/new-planet" onClick={() => move('CREATE_GROUPCHAT')}>
      <ChatroomItem 
        name={NAME.BUTTON.CREATE_GROUPCHAT}
        icon="/assets/planet-add.png"
        type="CREATE_GROUPCHAT"
      />
    </Link>
  );
}

const GroupChatList = ({ move }) => {
  return (
    <div className="groupchat-list-container">
      <input 
        text="text" 
        className="groupchat-search-input"
        placeholder={DESCRIPTION.INPUT_PLACEHOLDER.SEARCH_GROUPCHAT}
      ></input>
      <div>
        {renderCreateGroupChatBtn(move)}
      </div>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(GroupChatList);