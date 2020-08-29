import axios from "axios";

import config from "../config";

// export const httpNix = axios.create({
//   baseURL: config.nix_baseURI,
//   headers: {
//     "Content-Type": "application/json",
//     "x-app-id": config.nix_apiId,
//     "x-app-key": config.nix_apiKey,
//   },
// });
// console.log("config.base", config.spoonacular_baseURI);

export const httpSpoonacular = axios.create({
  baseURL: config.spoonacular_baseURI,
  headers: {
    "Content-Type": "application/json",
  },
});
