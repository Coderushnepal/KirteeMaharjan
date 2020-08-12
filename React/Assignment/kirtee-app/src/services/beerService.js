import http from "../utils/http";

export const fetchBeers = async () => {
  //call async api
  const { data } = await http.get("/beers");
  console.log(data);
  return data;
};

export const fetchBeerById = async (id) => {
  //call single beer async api
  const { data } = await http.get(`/beers/hhh`); //${id}
  console.log(data);
  return data[0];
};
