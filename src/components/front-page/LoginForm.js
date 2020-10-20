import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth";
import * as yup from "yup";
import schema from "form-schema-validation";

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
  const history = useHistory();

  const postNewLogin = (newLogin) => {
    axiosWithAuth()
      .post("/auth/login", newLogin)
      .then((res) => {
        window.localStorage.setItem("token", res.data.payload);
        history.push("/");
      })
      .catch((err) => {
        debugger;
        console.log(err);
      });
  };

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
      <h1>Login Form</h1>
      <form onSubmit={submit}>
        <div class>
          <div>{formErrors.username}</div>
          <div>{formErrors.password}</div>
        </div>
        <br />

        <div className="form-container">
          <label>Username: </label>
          <input
            type="text"
            name="username"
            placeholder="Enter Your Username"
            value={formValues.username}
            onChange={change}
          />
          <br />
          <label>Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={formValues.password}
            onChange={change}
          />
          <br />
          <button>Click to Log in</button>

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
