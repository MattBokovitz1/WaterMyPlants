import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { Input } from "../../styles/styles";
import { Header } from "../../styles/styles";
import { Button } from "../../styles/styles";

const initialFormValues = {
  name: "",
  location: "",
  description: "",
  plantURL: "",
};

const AddPlant = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const history = useHistory();

  const handleChanges = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const addPlant = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/plants", formValues)
      .then(() => {
        history.push("/reload");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="plant-form">
        <Header>Add Plant</Header>
        <form onSubmit={addPlant}>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={formValues.name}
            onChange={handleChanges}
          />
          <Input
            type="text"
            name="location"
            placeholder="Location"
            value={formValues.location}
            onChange={handleChanges}
          />
          <Input
            type="text"
            name="description"
            placeholder="Description"
            value={formValues.description}
            onChange={handleChanges}
          />
          <Input
            type="text"
            name="plantURL"
            placeholder="Plant URL"
            value={formValues.plantURL}
            onChange={handleChanges}
          />
          <Button>Add Plant</Button>
        </form>
      </div>
    </>
  );
};

export default AddPlant;
