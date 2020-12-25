import axios from "axios";

export default axios.create({
  baseUrl: "https://googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: "AIzaSyDb-g7xAyI-YWYS-_LUvqbZNYQD2mb39ys",
  },
});
