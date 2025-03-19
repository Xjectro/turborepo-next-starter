import axios from "axios";

const api = axios.create({
  baseURL: process.env.SERVER_URI,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("access_token="))
        ?.split("=")[1];

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);

export const getReq = async <T>(url: string, params?: object): Promise<T> => {
  const { data } = await api.get<T>(url, { params });
  return data;
};

export const postReq = async <T>(url: string, body?: object): Promise<T> => {
  const { data } = await api.post<T>(url, body);
  return data;
};

export const patchReq = async <T>(url: string, body?: object): Promise<T> => {
  const { data } = await api.patch<T>(url, body);
  return data;
};

export const putReq = async <T>(url: string, body?: object): Promise<T> => {
  const { data } = await api.put<T>(url, body);
  return data;
};

export const deleteReq = async <T>(url: string): Promise<T> => {
  const { data } = await api.delete<T>(url);
  return data;
};

export default api;
