import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth";

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
      <h2>Edit Plant</h2>
      <form onSubmit={editPlant}>
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
        <button>Edit Plant</button>
      </form>
    </div>
  );
};

export default EditPlant;
