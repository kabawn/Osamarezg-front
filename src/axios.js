import axios from "axios";

const instance = axios.create({
   baseURL: "https://osamarezg.com/api", // Replace with your base URL
});

export default instance;
