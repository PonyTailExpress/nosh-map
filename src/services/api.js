import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://nosh-map-default-rtdb.europe-west1.firebasedatabase.app",
});

export default apiClient;
