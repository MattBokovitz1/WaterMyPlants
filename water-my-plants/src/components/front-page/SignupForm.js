import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import schema from "form-schema-validation";

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
  cactus: false,
  orchids: false,
  fir: false,
  daisies: false,
  notes: "",
};

const initialFormErrors = {
  Username: "",
  email: "",
  password: "",
  confirmpassword: "",
};

export default function Form() {
  const [registers, setRegisters] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const postNewRegister = (newRegister) => {
    axios
      .post("https://reqres.in/api/products", newRegister)
      .then((newRegister) => {
        setRegisters([...registers, newRegister.data]);
        setFormValues(initialFormValues);
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
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submit = (evt) => {
    evt.preventDefault();
    const newRegister = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      confirmpassword: formValues.confirmpassword.trim(),
      plant: ["cactus", "orchids", "fir", "daisies"].filter(
        (plant) => formValues[plant]
      ),
      notes: formValues.notes.trim,
    };
    postNewRegister(newRegister);
  };
  // useEffect(()=>{
  //     schema.isValid(formValues).then((valid)=>{
  //         setDisabled(!valid);
  //     })
  // }, [formValues])

  return (
    <div>
      <h2>Register Here!</h2>
      <form onSubmit={submit}>
        <div className="errors-container">
          <div>{formErrors.name}</div>
          <div>{formErrors.email}</div>
          <div>{formErrors.password}</div>
          <div>{formErrors.confirmpassword}</div>
        </div>
        <br />

        <div className="form-container">
          <label>Username: </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Username"
            value={formValues.name}
            onChange={change}
          />
          <br />
          <label>Email: </label>
          <input
            type="text"
            name="email"
            placeholder="Enter Your Email"
            value={formValues.email}
            onChange={change}
          />
          <br />
          <label>Password: </label>
          <input
            type="text"
            name="password"
            placeholder="Enter Your Password"
            value={formValues.password}
            onChange={change}
          />
          <br />
          <label>Confirm Password: </label>
          <input
            type="text"
            name="confirmpassword"
            placeholder="Confirm Your Password"
            value={formValues.confirmpassword}
            onChange={change}
          />
          <br />
          <h4>Plants</h4>
          <label>
            Cactus{" "}
            <input
              type="checkbox"
              name="cactus"
              checked={formValues.cactus}
              onChange={change}
            />
          </label>
          <br />
          <label>
            Orchids{" "}
            <input
              type="checkbox"
              name="orchids"
              checked={formValues.orchids}
              onChange={change}
            />
          </label>
          <br />
          <label>
            Fir{" "}
            <input
              type="checkbox"
              name="fir"
              checked={formValues.fir}
              onChange={change}
            />
          </label>
          <br />
          <label>
            Daisies{" "}
            <input
              type="checkbox"
              name="daisies"
              checked={formValues.daisies}
              onChange={change}
            />
          </label>
          <br />
          <h4>Notes</h4>
          <input
            type="text"
            name="notes"
            placeholder="Place Notes Here"
            value={formValues.notes}
            onChange={change}
          />
          <br />
          <br />
          <button disabled={disabled}>Click to SignUp</button>

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
