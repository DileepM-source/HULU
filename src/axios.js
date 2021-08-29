import axios from "axios"; //library to make requests to API end point

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3", //base URL to make the requests to movie database
});

export default instance;
