import axios from "axios";
import { BASE_URL } from "../constants/BaseUrl";

export const ApiInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
  paramsSerializer: {
    indexes: null,
  },
});
