import React from "react";
import { useHistory, Link } from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { H3, Button, Paragraph } from "../../styles/StyledComponents";

const PlantDetails = ({ plant }) => {
  const history = useHistory();

  const removePlant = (plant) => {
    axiosWithAuth()
      .delete(`/api/plants/${plant.id}`)
      .then(() => {
        history.push("/reload");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="plant-details">
      <img src={plant.plantURL} alt="plant-img" />
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
};

export default PlantDetails;
