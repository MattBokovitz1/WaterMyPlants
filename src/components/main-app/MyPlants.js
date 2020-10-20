import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth";

const MyPlants = () => {
  const [plantList, setPlantList] = useState([]);
  const history = useHistory();

  const fetchPlants = () => {
    axiosWithAuth()
      .get("/api/plants")
      .then((res) => setPlantList(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  const removePlant = (plant) => {
    axiosWithAuth()
      .delete(`/api/plants/${plant.id}`)
      .then(() => {
        history.push("/reload");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="plant-card">
        <h1>My Plants</h1>
        <Link to={"/add-plant"}>
          <button>New Plant</button>
        </Link>
        {plantList.map((plant) => {
          return (
            <div key={plant.id} className="plant-details">
              <img src={plant.plantURL} alt="plant" width="50%" />
              <h3>{plant.name}</h3>
              <p>{plant.location}</p>
              <p>{plant.description}</p>
              <Link to={`/edit-plant/${plant.id}`}>
                <button>Edit</button>
              </Link>
              <button
                onClick={() => {
                  removePlant(plant);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyPlants;
