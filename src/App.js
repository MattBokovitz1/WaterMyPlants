import React from "react";
import "./styles/App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { AppProvider } from "./components/main-app/AppContext";
import NavBar from "./components/main-app/Navbar";
import LoginForm from "./components/front-page/LoginForm";
import SignupForm from "./components/front-page/SignupForm";
import MyPlants from "./components/main-app/MyPlants";
import AddPlant from "./components/main-app/AddPlant";
import EditPlant from "./components/main-app/EditPlant";
import PrivateRoute from "./components/main-app/PrivateRoute";

const App = () => {
  return (
    <AppProvider>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/signup" component={SignupForm} />
          <Redirect exact from="/reload" to="/" />
          <PrivateRoute exact path="/" component={MyPlants} />
          <PrivateRoute exact path="/add-plant" component={AddPlant} />
          <PrivateRoute exact path="/edit-plant/:id" component={EditPlant} />
        </Switch>
      </div>
    </AppProvider>
  );
};

export default App;
