import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "../style/ChatroomItem.css";

const mapStateToProps = (state, ownProps) => {
  const { icon, name, desc, type } = ownProps;
  return {
    icon,
    name,
    desc,
    type
  };
};

const mapDispatchToProps = {};

const renderIcon = icon => {
  return icon !== undefined ? (
    <img
      className="chatroom-item-icon"
      src={process.env.PUBLIC_URL + icon}
    ></img>
  ) : null;
};

const ChatroomItem = ({ icon, name, desc, type }) => {
  return (
    <button
      className={
        type === "CREATE_GROUPCHAT"
          ? "chatroom-item-container create-groupchat"
          : "chatroom-item-container"
      }
    >
      {renderIcon(icon)}
      <div className="chatroom-item-info-container">
        <h3 className="chatroom-item-info-name">{name}</h3>
        <h4 className="chatroom-item-info-desc">{desc}</h4>
      </div>
    </button>
  );
};

ChatroomItem.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
  type: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatroomItem);
