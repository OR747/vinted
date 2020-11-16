import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Offer from "./containers/Offer";
import Home from "./containers/Home";
import Header from "./components/Header";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Cookie from "js-cookie";
import Publish from "./containers/Publish";
function App() {
  const [token, setToken] = useState(Cookie.get("useToken") || null);

  const setUser = (tokenToSet) => {
    if (tokenToSet) {
      Cookie.set("useToken", tokenToSet);

      setToken(tokenToSet);
    } else {
      Cookie.remove("useToken");
      setToken(null);
    }
  };

  return (
    <Router>
      <Header token={token} setUser={setUser} />
      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/signup">
          <Signup setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/publish">
          <Publish token={token} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
