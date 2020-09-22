import http from "../utils/http";

export async function login(credentials) {
  const params = { offset: 0, limit: 10, query: "milk" };
  const { data } = await http.get("/foods/search", {
    params,
  });

  return data;
}
