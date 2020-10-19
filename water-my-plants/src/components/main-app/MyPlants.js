import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import axiosWithAuth from "../../utils/axiosWithAuth";

const initialFormValues = {
  plant: "",
  type: "",
  schedule: "",
};

const dummyData = [
  {
    id: 1,
    name: "tree_1",
    location: "washington",
    description: "big tree",
    plantURL: "google.com",
    userId: 1,
  },
  {
    id: 2,
    plant: "tree_2",
    type: "small tree",
    schedule: "daily",
  },
  {
    id: 3,
    plant: "tree_3",
    type: "medium tree",
    schedule: "every other day",
  },
];

const MyPlants = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [plantList, setPlantList] = useState(dummyData);
  const history = useHistory();

  const handleChanges = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const addPlant = (e) => {
    e.preventDefault();
    axios
      .post("https://api-watermyplants.herokuapp.com/api/plants", formValues)
      .then((res) => {
        setPlantList(res.data);
      })
      .catch((err) => console.log(err));
    setFormValues(initialFormValues);
  };

  // setPlantList([
  //   ...plantList,
  //   {
  //     id: Date.now(),
  //     name: formValues.plant.trim(),
  //     location: formValues.type.trim(),
  //     schedule: formValues.schedule.trim(),
  //   },
  // ]);

  const editPlant = (e) => {
    console.log("edit", e);
    history.push(`/update-plant/${plantList.id}`);
  };

  const removePlant = (e) => {
    console.log("delete", e);
  };

  return (
    <>
      <div className="plant-card">
        <h1>My Plants</h1>
        {plantList.map((plant) => {
          return (
            <div key={plant.id} className="plant-details">
              <h3>{plant.plant}</h3>
              <p>{plant.type}</p>
              <p>{plant.schedule}</p>
              <button
                onClick={() => {
                  editPlant();
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  removePlant();
                }}
              >
                Delete
              </button>
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
