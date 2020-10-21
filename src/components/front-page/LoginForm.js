import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../main-app/AppContext";
import axiosWithAuth from "../../utils/axiosWithAuth";
import axios from "axios";
import * as yup from "yup";
import schema from "form-schema-validation";
import { Label } from "../../styles/Styles";
import { Header } from "../../styles/Styles";
import { Button } from "../../styles/Styles";
import { Input } from "../../styles/Styles";

const initialFormValues = {
  username: "",
  password: "",
};

const initialFormErrors = {
  username: "",
  password: "",
};

export default function LoginForm() {
  const [login, setLogin] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);
  const [quotes, setQuotes] = useState([]);
  const [userId, setUserId] = useContext(AppContext);
  const history = useHistory();

  const postNewLogin = (newLogin) => {
    axiosWithAuth()
      .post("/auth/login", newLogin)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        // setUserId(res.data.user.id);
        history.push("/");
      })
      .catch((err) => {
        debugger;
        console.log(err);
      });
  };

  const fetchQuote = () => {
    axios
      .get("https://quotes.rest/qod?language=en")
      .then((res) => {
        setQuotes(res.data.contents.quotes);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
  };

  const change = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    inputChange(name, valueToUse);
  };

  const inputChange = (name, value) => {
    // validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submit = (evt) => {
    evt.preventDefault();
    const newLogin = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    };
    postNewLogin(newLogin);
  };

  // useEffect(() => {
  //   schema.isValid(formValues).then((valid) => {
  //     setDisabled(!valid);
  //   });
  // }, [formValues]);

  return (
    <div>
      <form onSubmit={submit}>
        <div class>
          <div>{formErrors.username}</div>
          <div>{formErrors.password}</div>
        </div>
        <br />

        <div className="form-container">
          <Header>Login</Header>
          <Label> </Label>
          <Input
            type="text"
            name="username"
            placeholder="Enter Your Username"
            value={formValues.username}
            onChange={change}
          />
          <br />
          <Label></Label>
          <Input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={formValues.password}
            onChange={change}
          />
          <br />
          <Button>Click to Log in</Button>

          {quotes.map((quote) => {
            return (
              <div key={quote.id}>
                <p>"{quote.quote}"</p>
                <p>{quote.author}</p>
              </div>
            );
          })}

          {/* <div className="login-container">
            {login.map((register) => {
              if (!register) {
                return <h3>Working on Finding Your Account</h3>;
              }
              return (
                <div className="login-details">
                  <h2>Your Login Was Successful!</h2>
                </div>
              );
            })}
          </div> */}
        </div>
      </form>
    </div>
  );
}
