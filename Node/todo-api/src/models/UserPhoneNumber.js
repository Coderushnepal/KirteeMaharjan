import connection from "../db";
import snakeize from "snakeize";
import camelize from "camelize";

const table = "users_phone_numbers";

export async function add(params) {
  const data = snakeize(params);
  console.log("**********", data);
  const [result] = await connection.batchInsert(table, data);
  console.log(result);
  return camelize(result);
}
