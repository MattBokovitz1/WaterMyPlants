import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./AppContext";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { Header, Button } from "../../styles/StyledComponents";
import PlantDetails from "./PlantDetails";

const MyPlants = () => {
  const [plantList, setPlantList] = useContext(AppContext);

  const fetchPlants = () => {
    axiosWithAuth()
      .get(`/api/plants`)
      .then((res) => setPlantList(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchPlants();
  });

  return (
    <>
      <div className="plant-card">
        <Header>My Plants</Header>
        <Link to={"/add-plant"}>
          <Button>New Plant</Button>
        </Link>
        {plantList.map((plant) => {
          return <PlantDetails key={plant.id} plant={plant} />;
        })}
      </div>
    </>
  );
};

export default MyPlants;
