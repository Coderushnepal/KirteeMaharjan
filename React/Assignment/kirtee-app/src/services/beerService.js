import http from "../utils/http";

export const fetchBeers = async () => {
  //call async api
  const res = await http.get("/beers");
  const data = res.data;
  // console.log(res, data);
  return data;
};

export const fetchBeerById = async (id) => {
  //call single beer async api
  const { data } = await http.get(`/beers/${id}`); //${id}
  console.log(data);
  return data[0];
};
