import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ChatRoomItem from "./ChatroomItem";
import { NAME, DESCRIPTION } from "../constants/string";
import { move } from "../services/action";
import "../style/Lobby.css";

// const mapStateToProps = state => {
// };

const mapDispatchToProps = {
  move
};

const Lobby = ({ move }) => {
  return (
    <div className="lobby-container">
      <div className="chat-mode-item-list-container">
        <Link to="/universe" onClick={() => move('UNIV_CHATROOM')}>
          <ChatRoomItem
            name={NAME.CHAT_MODE.UNIV}
            desc={DESCRIPTION.CHAT_MODE.UNIV}
            icon="/assets/planet01.png"
          />
        </Link>
        <Link to="/galaxies" onClick={() => move('OPEN_CHATROOM_LIST')}>
          <ChatRoomItem
            name={NAME.CHAT_MODE.GROUP}
            desc={DESCRIPTION.CHAT_MODE.GROUP}
            icon="/assets/planet02.png"
          />
        </Link>
        <Link to="/planets" onClick={() => move('SOLO_CHATROOM_LIST')}>
          <ChatRoomItem
            name={NAME.CHAT_MODE.SOLO}
            desc={DESCRIPTION.CHAT_MODE.SOLO}
            icon="/assets/planet03.png"
          />
        </Link>
      </div>
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Lobby);
