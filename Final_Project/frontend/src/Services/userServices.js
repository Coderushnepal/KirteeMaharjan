import http from "../utils/http";

export async function login(data) {
  // const params = { offset: 0, limit: 10, query: "milk" };
  // const result = await http.get("/foods/search", {
  //   params,
  // });
  const result = await http.post("/login", { data });
  console.log(result);
  return result;
}

export async function signup(data) {
  const result = await http.post("/users", data);
  return result;
}
