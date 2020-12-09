import axios from 'axios';

const movieService = axios.create({
  baseURL:"https://my-json-server.typicode.com/YosorTV/photo-capture/movies",
  headers: {"Access-Control-Allow-Origin": "*"}
})

export default movieService;