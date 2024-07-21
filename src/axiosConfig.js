import axios from "axios";

const instance = axios.create({
  // http://43.205.127.63:5000 aws old server
  baseURL: "http://62.72.58.41:5000/",
});

export default instance;
