import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import * as yup from "yup";
import schema from "form-schema-validation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Label } from "../../styles/Styles";
import { Header } from "../../styles/Styles";
import { Button } from "../../styles/Styles";
import { Input } from "../../styles/Styles";

const initialFormValues = {
  id: "",
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  phoneNumber: "",
  profileURL: "",
};

const initialFormErrors = {
  firstName: "",
  lastName: "",
  username: "",
  password: "",
};

export default function Form() {
  const [registers, setRegisters] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const postNewRegister = (newRegister) => {
    axiosWithAuth()
      .post("/auth/register", newRegister)
      .then((newRegister) => {
        setRegisters([...registers, newRegister.data]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        debugger;
        console.log(err);
      });
  };

  // const validate = (name, value) => {
  //   yup
  //     .reach(schema, name)
  //     .validate(value)
  //     .then((valid) => {
  //       setFormErrors({
  //         ...formErrors,
  //         [name]: "",
  //       });
  //     })
  //     .catch((err) => {
  //       setFormErrors({
  //         ...formErrors,
  //         [name]: err.errors[0],
  //       });
  //     });
  // };

  const change = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    inputChange(name, valueToUse);
  };

  const inputChange = (name, value) => {
    // validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submit = (evt) => {
    evt.preventDefault();
    const newRegister = {
      username: formValues.username.trim(),
      firstName: formValues.firstName.trim(),
      lastName: formValues.lastName.trim(),
      phoneNumber: formValues.phoneNumber.trim(),
      password: formValues.password.trim(),
    };
    postNewRegister(newRegister);
  };

  // useEffect(() => {
  //   schema.isValid(formValues).then((valid) => {
  //     setDisabled(!valid);
  //   });
  // }, [formValues]);

  return (
    <div>
      <form onSubmit={submit}>
        <div className="errors-container">
          <div>{formErrors.username}</div>
          <div>{formErrors.firstName}</div>
          <div>{formErrors.lastName}</div>
          <div>{formErrors.phoneNumber}</div>
          <div>{formErrors.password}</div>
        </div>
        <br />

        <div className="form-container">
          <Header>Register Here!</Header>
          <Label></Label>
          <Input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={formValues.username}
            onChange={change}
          />
          <br />
          <Label></Label>
          <Input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            value={formValues.firstName}
            onChange={change}
          />
          <br />
          <Label></Label>
          <Input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            value={formValues.lastName}
            onChange={change}
          />
          <br />
          <Label> </Label>
          <Input
            type="tel"
            name="phoneNumber"
            placeholder="Enter Phone Number"
            value={formValues.phoneNumber}
            onChange={change}
          />
          <br />
          <Label> </Label>
          <Input
            type="text"
            name="password"
            placeholder="Enter Password"
            value={formValues.password}
            onChange={change}
          />
          <br />
          <br />
          <br />
          <Button>Click to Sign Up</Button>

          <div className="register-container">
            {registers.map((register) => {
              if (!register) {
                return <h3>Working on Finding Your Account</h3>;
              }
              return (
                <div className="register-details">
                  <h2>Your Registration Was Successful!</h2>
                </div>
              );
            })}
          </div>
        </div>
      </form>
    </div>
  );
}
