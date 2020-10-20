import React from "react";
import "./styles/App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/reusable/Navbar";
import MyPlants from "./components/main-app/MyPlants";
import LoginForm from "./components/front-page/LoginForm";
import SignupForm from "./components/front-page/SignupForm";
import AddPlant from "./components/main-app/AddPlant";
import EditPlant from "./components/main-app/EditPlant";
import PrivateRoute from "./components/main-app/PrivateRoute";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
        <Redirect exact from="/reload" to="/" />
        <PrivateRoute exact path="/" component={MyPlants} />
        <PrivateRoute exact path="/add-plant" component={AddPlant} />
        <PrivateRoute path="/edit-plant/:id" component={EditPlant} />
      </Switch>
    </div>
  );
};

export default App;
