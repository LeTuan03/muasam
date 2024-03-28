import axios from "axios";
import { API_PATH } from "../../../appConst";

export const updateProfile = (payload) => {
  return axios.put(API_PATH + "/updateProfile", payload);
};

export const updateAvtProfile = (payload) => {
  return axios.put(API_PATH + "/updateAvtProfile", payload);
};
