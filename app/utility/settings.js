import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://192.168.42.186:9000/api",
  },
  staging: {
    apiUrl: "http://192.168.42.186:9000/api",
  },
  prod: {
    apiUrl: "http://192.168.42.186:9000/api",
  },
};

const getCurentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.expoConfig.releaseChannel === "staging")
    return settings.staging;
  return settings.prod;
};

export default getCurentSettings();
