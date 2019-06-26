import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Posts from "./Diaspora/Posts/Posts";
import Drawer from "./containers/Drawer/Drawer";
import DiasporaHeader from "./components/DiasporaHeader/DiasporaHeader";

import Post from "./Diaspora/Posts/Post/Post";
import Notifications from "./Diaspora/Notifications/Notifications"
import MyPosts from "./Diaspora/MyPosts/MyPosts";
import Search from "./Diaspora/Search/Search";
import Contribute from "./Diaspora/Contribute/Contribute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <DiasporaHeader />
        <div className="main">
          <Switch>
            <Route path="/" exact component={Posts} />
            <Route path="/post" component={Post} />
            <Route path="/search" component={Search} />
            <Route path="/contribute" component={Contribute} />
            <Route path="/my-posts" component={MyPosts} />
            <Route path="/notifications" component={Notifications} />
            <Redirect to="/" />
          </Switch>
        </div>
        <Drawer />
      </BrowserRouter>
    </div>
  );
}

export default App;
