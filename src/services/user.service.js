import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://user-auth-api.vercel.app/api/test/";
const getPublicContent = () => {
  return axios.get(API_URL + "all");
};
const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};
const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};
const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const exportedObject = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
}
export default exportedObject;