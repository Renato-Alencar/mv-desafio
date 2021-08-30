import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.sampleapis.com/wines/reds",
});

export default instance;
