import http from "../utils/http";

// login
export async function login(credentials) {
  console.log(credentials);
  const { data } = await http.post("/login", { ...credentials });
  console.log(data);
  return data;
}

// signup
export async function signup(data) {
  const result = await http.post("/users", data);
  return result;
}

// fetch log by meal type
export async function fetchLogs(date, mealType) {
  // date -> ISODateString
  // mealTypes -> one in (1,2,3,4)
  const params = {
    date,
    mealType,
  };

  const { data } = await http.get("/users/logs", {
    params,
  });

  // console.log(data);
  return data;
}

export async function addLogs({
  foodId,
  servings,
  measurement,
  mealType,
  loggedDate,
  grams,
}) {
  const body = {
    foodId,
    servings,
    measurement,
    mealType,
    loggedDate,
    grams,
  };

  console.log(body);
  const { data } = await http.post("/users/logs", {
    ...body,
  });
  console.log(data);
  return data.data;
}

export async function deleteLog(id) {
  await http.delete(`users/logs/${id}`);
}
