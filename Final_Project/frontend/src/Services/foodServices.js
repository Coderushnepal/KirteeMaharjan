import http from "../utils/http";

export async function searchFood(pageParams, query) {
  let params = {
    ...pageParams,
    query,
  };
  const { data } = await http.get("/foods/search", {
    params,
  });

  return { data };
}

export async function fetchFoodById(id) {
  const { data } = await http.get(`/foods/${id}`);
  return data;
}
