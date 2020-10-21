import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import axiosWithAuth from "../../utils/axiosWithAuth";
import axios from "axios";
import * as yup from "yup";
import {
  Paragraph,
  Header,
  Button,
  Input,
} from "../../styles/StyledComponents";

const initialFormValues = {
  username: "",
  password: "",
};

const initialFormErrors = {
  username: "",
  password: "",
};

export default function LoginForm() {
  // const [login, setLogin] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);
  const [quotes, setQuotes] = useState([]);
  // const [userId, setUserId] = useContext(AppContext);
  const history = useHistory();

  // Login
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
    const newLogin = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    };
    postNewLogin(newLogin);
  };

  //Fetch Quote

  const fetchQuote = () => {
    axios
      .get("https://quotes.rest/qod?language=en")
      .then((res) => {
        setQuotes(res.data.contents.quotes);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  //Form Validation

  const formSchema = yup.object().shape({
    username: yup.string().required("Must include username."),
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

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  });

  return (
    <div>
      <form onSubmit={submit}>
        <div className="form-container">
          <Header>Login</Header>

          <Input
            type="text"
            name="username"
            placeholder="Enter Your Username"
            value={formValues.username}
            onChange={change}
          />
          <br />

          <Input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={formValues.password}
            onChange={change}
          />
          <br />
          <div className="errors-container">
            <Paragraph>{formErrors.username}</Paragraph>
            <Paragraph>{formErrors.password}</Paragraph>
          </div>
          <br />
          <Button disabled={disabled}>Click to Log in</Button>

          {quotes.map((quote) => {
            return (
              <div key={quote.id}>
                <Paragraph>"{quote.quote}"</Paragraph>
                <Paragraph>{quote.author}</Paragraph>
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
}
