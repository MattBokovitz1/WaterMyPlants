import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth";

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
        <h2>Add Plant</h2>
        <form onSubmit={addPlant}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formValues.name}
            onChange={handleChanges}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formValues.location}
            onChange={handleChanges}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formValues.description}
            onChange={handleChanges}
          />
          <input
            type="text"
            name="plantURL"
            placeholder="Plant URL"
            value={formValues.plantURL}
            onChange={handleChanges}
          />
          <button>Add Plant</button>
        </form>
      </div>
    </>
  );
};

export default AddPlant;
