import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.42.186:9000/api",
});

export default apiClient;
