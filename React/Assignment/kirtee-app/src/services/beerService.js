import http from "../utils/http";

export const fetchBeers = async (
  pageInfo = { page: 2, size: 10 },
  beerName
) => {
  const params = { page: pageInfo.page, per_page: pageInfo.size };
  if (!!beerName) {
    params.beer_name = beerName;
  }

  //call async api
  const res = await http.get("/beers", { params });
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
