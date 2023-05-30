import axios from "axios";

export const API_URL = "http://localhost:5144/api"; // set on valid url

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

export default $api;
