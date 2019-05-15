import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Chats from "./Connect/Chats/Chats";
import ConnectHeader from "./components/ConnectHeader/ConnectHeader";
import Contacts from "./Connect/Contacts/Contacts";
import Drawer from "./containers/Drawer/Drawer";
import Groups from "./Connect/Groups/Groups";
import Calls from "./Connect/Calls/Calls";
import CreateGroup from "./Connect/Groups/CreateGroup/CreateGroup";
import PrivateChat from "./Connect/Chats/PrivateChat/PrivateChat";
import VideoCall from "./Connect/Chats/PrivateChat/VideoCall/VideoCall";
import VoiceCall from "./Connect/Chats/PrivateChat/VoiceCall/VoiceCall";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ConnectHeader />
        <div className="main">
          <Switch>
            <Route path="/" exact component={Chats} />
            <Route path="/contacts" exact component={Contacts} />
            <Route path="/groups" exact component={Groups} />
            <Route path="/calls" exact component={Calls} />
            <Route path="/creategroup" exact component={CreateGroup} />
            <Route path="/private-chat" exact component={PrivateChat} />
            <Route path="/video-call" exact component={VideoCall} />
            <Route path="/voice-call" exact component={VoiceCall} />
            <Redirect to="/" />
          </Switch>
        </div>
        <Drawer />
      </BrowserRouter>
    </div>
  );
}

export default App;
