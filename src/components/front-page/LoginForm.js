import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth";
import * as yup from "yup";
import schema from "form-schema-validation";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Label } from "../../styles/styles";
import { Header } from "../../styles/styles";
import { Button } from "../../styles/styles";
import { Input } from "../../styles/styles";

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

  const Label = styled.label`
    padding: 0.5% 0% 0.5% 0%;
    font-size: 3rem;
  `;

  const Header = styled.h2`
    font-size: 6rem;
    padding: 0% 0% 5% 0%;
  `;

  const Input = styled.input`
    font-size: 2rem;
  `;

  const Button = styled.button`
    font-size: 3rem;
    margin: 5% 0% 0% 0%;
  `;

  return (
    <div>
      <Header>Login </Header>
      <form onSubmit={submit}>
        <div class>
          <div>{formErrors.username}</div>
          <div>{formErrors.password}</div>
        </div>
        <br />

        <div className="form-container">
          <Label>Username: </Label>
          <Input
            type="text"
            name="username"
            placeholder="Enter Your Username"
            value={formValues.username}
            onChange={change}
          />
          <br />
          <Label>Password: </Label>
          <Input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={formValues.password}
            onChange={change}
          />
          <br />
          <Button>Click to Log in</Button>
        </div>
      </form>
    </div>
  );
}
