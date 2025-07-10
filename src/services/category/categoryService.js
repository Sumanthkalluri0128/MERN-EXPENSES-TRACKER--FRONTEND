import { getUserFromStorage } from "../../utils/getUserFromStorage";
import { BASE_URL } from "../../utils/url";
import axios from "axios";

const token = getUserFromStorage();
//!Login
export const addCategoryAPI = async ({ name, type }) => {
  const response = await axios.post(
    `${BASE_URL}/categories/add`,
    {
      name,
      type,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  //return a promise
  return response.data;
};

export const listCategoriesAPI = async ({ email, password }) => {
  const response = await axios.get(`${BASE_URL}/categories/lists`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  //Return a promise
  return response.data;
};

export const updateCategoryAPI = async ({ name, type, id }) => {
  const response = await axios.put(
    `${BASE_URL}/categories/update/${id}`,
    {
      name,
      type,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  //return a promise
  return response.data;
};

export const deleteCategoryAPI = async (id) => {
  const response = await axios.delete(`${BASE_URL}/categories/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  //return a promise
  return response.data;
};
