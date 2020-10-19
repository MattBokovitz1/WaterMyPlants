import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
// import schema from "formSchema";

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
  //   const [formErrors, setFormErrors] = useState(initialFormErrors);
  //   const [disabled, setDisabled] = useState(true);

  const postNewLogin = (newLogin) => {
    axios
      .post("", newLogin)
      .then((newLogin) => {
        setLogin([...login, newLogin.data]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        debugger;
        console.log(err);
      });
  };

  //   const validate = (name, value) => {
  //     yup
  //       .reach(schema, name)
  //       .validate(value)
  //       .then((valid) => {
  //         setFormErrors({
  //           ...formErrors,
  //           [name]: err.errors[0],
  //         });
  //       });
  //   };

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
      name: formValues.name.trim(),
      password: formValues.password.trim(),
    };
    postNewLogin(newLogin);
  };
  //   useEffect(() => {
  //     schema.isValid(formValues).then((valid) => {
  //       setDisabled(!valid);
  //     });
  //   }, [formValues]);
  return (
    <div>  
        <h1>Login Form</h1>
        <form onSubmit={submit}>
            <div class>
                <div>{formErrors.username}</div>
                <div>{formErrors.password}</div>
        </form>
  )
}
