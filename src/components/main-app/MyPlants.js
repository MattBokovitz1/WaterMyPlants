import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
// import { axiosWithAuth } from "../../utils/axiosWithAuth";

const initialFormValues = {
  name: "",
  location: "",
  description: "",
  plantURL: "",
};

const MyPlants = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [plantList, setPlantList] = useState([]);
  const history = useHistory();

  const handleChanges = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const fetchPlants = () => {
    axios
      .get("https://api-watermyplants.herokuapp.com/api/plants")
      .then((res) => setPlantList(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  const addPlant = (e) => {
    e.preventDefault();
    axios
      .post("https://api-watermyplants.herokuapp.com/api/plants", formValues)
      .then((res) => {
        history.push("/reload");
      })
      .catch((err) => console.log(err));
    setFormValues(initialFormValues);
  };

  const editPlant = (e) => {
    history.push(`/update-plant/${plantList.id}`);
  };

  const removePlant = (e) => {
    axios
      .delete(
        `https://api-watermyplants.herokuapp.com/api/plants/${plantList.id}`
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="plant-card">
        <h1>My Plants</h1>
        {plantList.map((plant) => {
          return (
            <div key={plant.id} className="plant-details">
              <img src={plant.plantURL} alt="plant" width="50%" />
              <h3>{plant.name}</h3>
              <p>{plant.location}</p>
              <p>{plant.description}</p>
              <button onClick={editPlant}>Edit</button>
              <button onClick={removePlant}>Delete</button>
            </div>
          );
        })}
      </div>
      <div className="plant-form">
        <h2>Add Plants</h2>
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

export default MyPlants;
