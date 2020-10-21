import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Paragraph,
  Header,
  Button,
  Input,
} from "../../styles/StyledComponents";

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

  const formSchema = yup.object().shape({
    username: yup.string().required("Must include username."),
    firstName: yup
      .string()
      .required("Must include First name")
      .min(2, "First Name must be at least 2 characters long"),
    lastName: yup.string().required("Must include Last Name"),
    phoneNumber: yup
      .string()
      .required("Must include Phone Number")
      .min(10, "Phone number must be at least 10 digits"),
    password: yup
      .string()
      .required("Password is Required")
      .min(4, "Passwords must be at least 4 characters long."),
  });

  const validate = (name, value) => {
    yup
      .reach(formSchema, name)
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
    validate(name, value);
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

  /* Each time the form value state is updated, check to see if it is valid per our schema.
  This will allow us to enable/disable the submit button.*/
  useEffect(() => {
    /* We pass the entire state into the entire schema, no need to use reach here.
    We want to make sure it is all valid before we allow a user to submit
    isValid comes from Yup directly */
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  });

  return (
    <div>
      <form onSubmit={submit}>
        <div className="form-container">
          <Header>Register Here!</Header>

          <Input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={formValues.username}
            onChange={change}
          />
          <br />

          <Input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            value={formValues.firstName}
            onChange={change}
          />
          <br />

          <Input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            value={formValues.lastName}
            onChange={change}
          />
          <br />

          <Input
            type="tel"
            name="phoneNumber"
            placeholder="Enter Phone Number"
            value={formValues.phoneNumber}
            onChange={change}
          />
          <br />

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
          <div className="errors-container">
            <Paragraph>{formErrors.username}</Paragraph>
            <Paragraph>{formErrors.firstName}</Paragraph>
            <Paragraph>{formErrors.lastName}</Paragraph>
            <Paragraph>{formErrors.phoneNumber}</Paragraph>
            <Paragraph>{formErrors.password}</Paragraph>
          </div>
          <br />

          <Button disabled={disabled}>Click to Sign Up</Button>

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
