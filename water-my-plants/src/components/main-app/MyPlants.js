import React, { useState } from "react";

const initialFormValues = {
  plant: "",
  type: "",
  schedule: "",
};

const dummyData = [
  {
    id: 1,
    plant: "tree_1",
    type: "big tree",
    schedule: "weekly",
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

  const handleChanges = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    setPlantList([
      ...plantList,
      {
        id: Date.now(),
        plant: formValues.plant.trim(),
        type: formValues.type.trim(),
        schedule: formValues.schedule.trim(),
      },
    ]);
    setFormValues(initialFormValues);
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
              <button>Edit</button>
              <button>Delete</button>
            </div>
          );
        })}
      </div>
      <div className="plant-form">
        <h2>Add Plants</h2>
        <form onSubmit={submit}>
          <input
            type="text"
            name="plant"
            placeholder="Plant"
            value={formValues.plant}
            onChange={handleChanges}
          />
          <input
            type="text"
            name="type"
            placeholder="Type"
            value={formValues.type}
            onChange={handleChanges}
          />
          <input
            type="text"
            name="schedule"
            placeholder="Watering schedule"
            value={formValues.schedule}
            onChange={handleChanges}
          />
          <button>Add Plant</button>
        </form>
      </div>
    </>
  );
};

export default MyPlants;
