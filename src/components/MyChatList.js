import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ChatroomItem from "./ChatroomItem";

import "../style/MyChatList.css";

const mapStateToProps = state => {
  const { chatroomList } = state;
  return {
    chatroomList
  };
};

const mapDispatchToProps = {};

const renderGroupChatList = groupChatList => {
  return groupChatList.map(chatroom => {
    return (
      <Link to={`/galaxy/${chatroom.chatId}`}>
        <ChatroomItem
          name={chatroom.chatTitle}
          desc={chatroom.chatDesc}
          icon={`/assets/planet0${chatroom.chatIcon}.png`}
        />
      </Link>
    );
  });
};

const MyChatList = ({ chatroomList }) => {
  return (
    <div className="my-chat-list-container">
      <div className="my-chat-list-selector-container">
        
      </div>
      <div className="chatroom-list-container">
        {renderGroupChatList(chatroomList.group)}
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyChatList);
