import http from "../utils/http";

export async function login(credentials) {
  console.log(credentials);
  const { data } = await http.post("/login", { ...credentials });
  console.log(data);
  return data;
}

export async function signup(data) {
  const result = await http.post("/users", data);
  return result;
}
