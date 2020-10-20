import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { Input } from "../../styles/styles";
import { Header } from "../../styles/styles";
import { Button } from "../../styles/styles";

const EditPlant = () => {
  const [formValues, setFormValues] = useState([]);
  const history = useHistory();

  const handleChanges = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const editPlant = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/api/plants/:id`, formValues)
      .then((res) => {
        console.log(res);
        history.push("/reload");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="plant-form">
      <Header>Edit Plant</Header>
      <form onSubmit={editPlant}>
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
        <Button>Edit Plant</Button>
      </form>
    </div>
  );
};

export default EditPlant;
