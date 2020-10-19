import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: null,
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });
};
