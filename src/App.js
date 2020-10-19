import React from "react";
import "./styles/App.css";
import MyPlants from "./components/main-app/MyPlants";
import NavBar from "./components/reusable/Navbar";
import LoginForm from "./components/front-page/LoginForm";
import SignupForm from "./components/front-page/SignupForm";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Redirect exact from="/reload" to="/" />
        <Route exact path="/">
          <MyPlants />
        </Route>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/signup">
          <SignupForm />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
