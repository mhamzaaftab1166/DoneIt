import { create } from "apisauce";
import cache from "../utility/cache";
import AsyncStorage from "@react-native-async-storage/async-storage";

const apiClient = create({
  baseURL: "http://192.168.42.186:9000/api",
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);
  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }
  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
