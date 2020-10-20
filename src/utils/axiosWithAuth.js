import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://api-watermyplants.herokuapp.com",
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });
};

export default axiosWithAuth;
