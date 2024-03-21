import axios from "axios";

export const API_URL = (process.env.REACT_APP_API_URL ?? window.origin) + '/api'; // set on valid url

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

export default $api