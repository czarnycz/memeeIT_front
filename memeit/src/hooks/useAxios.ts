import axios, { AxiosRequestConfig } from "axios";
import { ACCESS_TOKEN } from "../constants";
import { useNavigate } from "react-router-dom";

export const authorizedApi = axios.create();


export const useAxios = () => {
  // const navigate = useNavigate();

  authorizedApi.interceptors.request.use((config: AxiosRequestConfig) => {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
      baseURL: process.env.REACT_APP_API_BASE_URL,
    };
  });

  axios.interceptors.request.use((config: AxiosRequestConfig) => {
      return {
        ...config,
        baseURL: process.env.REACT_APP_API_BASE_URL,
      }
    }
  )

  authorizedApi.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        // navigate("/login");
      }

      return Promise.reject(error);
    }
  );
};

export default useAxios;