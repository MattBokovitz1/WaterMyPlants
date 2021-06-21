import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { Input, Header, Button, Forms } from "../../styles/StyledComponents";

const initialFormValues = {
  name: "",
  location: "",
  description: "",
  plantURL: "",
};

const EditPlant = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const history = useHistory();
  const params = useParams();

  const handleChanges = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/plants/${params.id}`)
      .then((res) => {
        setFormValues(res.data[0]);
      });
  }, [params.id]);

  const editPlant = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/api/plants/${params.id}`, formValues)
      .then(() => {
        history.push("/reload");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="plant-form">
      <Forms>
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
      </Forms>
    </div>
  );
};

export default EditPlant;
