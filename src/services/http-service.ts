import axios from "axios";


export const HttpService = axios.create({
    baseURL: "http://192.168.0.148:8081/api/",
  });