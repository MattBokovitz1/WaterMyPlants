import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import * as yup from "yup";
import schema from "form-schema-validation";

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
      <h2>Register Here!</h2>
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
          <label>Username: </label>
          <input
            type="text"
            name="username"
            placeholder="Enter Your Username"
            value={formValues.username}
            onChange={change}
          />
          <br />
          <label>First Name: </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter Your First Name"
            value={formValues.firstName}
            onChange={change}
          />
          <br />
          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter Your Last Name"
            value={formValues.lastName}
            onChange={change}
          />
          <br />
          <label>Phone Number: </label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Enter Your Phone Number"
            value={formValues.phoneNumber}
            onChange={change}
          />
          <br />
          <label> Password: </label>
          <input
            type="text"
            name="password"
            placeholder="Enter Your Password"
            value={formValues.password}
            onChange={change}
          />
          <br />
          <br />
          <br />
          <button>Click to SignUp</button>

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
