import { httpSpoonacular } from "../utils/http";
import config from "../config";

export const fetchRecipies = async (
  pageInfo = { offset: 0, number: 20 },
  searchValue,
  maxCalories,
  type
) => {
  // console.log(config);
  let params = {
    apiKey: config.spoonacular_apiKey,
    query: "pasta",
    minCalories: 0,
    minFat: 0,
    minProtein: 0,
    minCarbs: 0,
    offset: pageInfo.offset,
    number: pageInfo.number,
  };

  if (!!maxCalories && !!type) {
    params = {
      ...params,
      maxCalories,
      type,
    };
    console.log("inside first if ", params);
  }

  if (!!searchValue) {
    params = {
      ...params,
      query: searchValue,
    };
  }

  // console.log(params);

  const { data } = await httpSpoonacular.get("/recipes/complexSearch", {
    params,
  });

  // console.log("** Berservices **", data.results);
  return data.results;
};

export const fetchRecipieNutritionWidgetByid = async (id) => {
  console.log("fetching data in beerservice with od", id);
  const params = {
    apiKey: config.spoonacular_apiKey,
  };
  const { data } = await httpSpoonacular.get(
    `recipes/${id}/nutritionWidget.json`,
    {
      params,
    }
  );
  // console.log("fetched data in beerservice", data);
  return data;
};

// const fetchRecipesByCalorie = async ({ maxCalories, number, offset }) => {
//   let params = {
//     maxCalories,
//     offset,
//     number,
//   };

//   const data = await httpSpoonacular.get("recipes/findByNutrients", params);
//   return data;
// };

// const fetchRandomRecipies = async () => {
//   const params = { number: 20 };
//   const data = await httpSpoonacular.get("/recipes/random", params);
//   return data;
// };
