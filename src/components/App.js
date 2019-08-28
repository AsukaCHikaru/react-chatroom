import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import LobbyView from "./LobbyView";
import GroupChatListView from "./GroupChatListView";
import SoloChatListView from "./SoloChatListView";
import ChatroomView from "./ChatroomView";

import '../style/App.css';



function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={LobbyView} />
        <Route path="/galaxies" component={GroupChatListView} />
        <Route path="/universe" render={props => <ChatroomView {...props} />} />
        <Route path="/planets" component={SoloChatListView} />
      </div>
    </Router>
  );
}

export default App;
