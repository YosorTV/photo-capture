import axios from 'axios';

const movieService = axios.create({
  baseURL:"/",  
})

export default movieService;