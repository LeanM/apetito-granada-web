import axios from "./client";
import { axiosAuth } from "./client";

export const getExamplePrompts = async (accessToken) => {
  return axiosAuth(accessToken).get("prompt/examplePrompts");
};

export const getIaPages = async () => {
  return axios.get("iapage/iapages");
};

export const getCategoryPrompts = async (accessToken, categoryID) => {
  return axiosAuth(accessToken).get("prompt/categoryPrompts/" + categoryID);
};

export const getSubCategoryPrompts = async (accessToken, subCategoryID) => {
  return axiosAuth(accessToken).get(
    "prompt/subcategoryPrompts/" + subCategoryID
  );
};

export const getCategories = async () => {
  return axios.get("category/categories");
};

export const getPackages = async () => {
  return axios.get("package/packages");
};

export const getExampleCategories = async () => {
  return axios.get("category/exampleCategories");
};

export const getSubCategoriesOfCategory = async (categoryID) => {
  return axios.get("category/subcategories/" + categoryID);
};

export const logInSubmission = async (userData) => {
  return axios.post("/auth/login", JSON.stringify(userData));
};

export const registerSubmission = async (userData) => {
  return axios.post("/auth/register", JSON.stringify(userData));
};

export const logoutSubmission = async (accessToken) => {
  return axiosAuth(accessToken).post("/auth/logout");
};

export const socialLogIn = async (socialCredentials) => {
  return axios.post("/auth/socialLogin", JSON.stringify(socialCredentials));
};

export const confirmOrder = async (accessToken, orderData) => {
  return axiosAuth(accessToken).post(
    "/payment/confirmOrder",
    JSON.stringify(orderData)
  );
};
