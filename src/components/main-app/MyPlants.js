import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { Header } from "../../styles/styles";
import { Button } from "../../styles/styles";
import { H3 } from "../../styles/styles";
import { Paragraph } from "../../styles/styles";

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
        <Header>My Plants</Header>
        <Link to={"/add-plant"}>
          <Button>New Plant</Button>
        </Link>
        {plantList.map((plant) => {
          return (
            <div key={plant.id} className="plant-details">
              <img src={plant.plantURL} alt="plant" width="50%" />
              <H3>{plant.name}</H3>
              <Paragraph>{plant.location}</Paragraph>
              <Paragraph>{plant.description}</Paragraph>
              <Link to={`/edit-plant/${plant.id}`}>
                <Button>Edit</Button>
              </Link>
              <Button
                onClick={() => {
                  removePlant(plant);
                }}
              >
                Delete
              </Button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyPlants;
