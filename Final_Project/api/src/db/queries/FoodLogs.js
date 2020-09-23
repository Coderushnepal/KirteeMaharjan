export const FETCH_LOGS_BY_MEAL_TYPE = (userId, date, mealTypeId) => {
  return `Select  
  ul.id, 
  ul.food_id, 
  ul.servings, 
  ul.measurement, 
  ul.grams,
  json_strip_nulls(json_agg(json_build_object(
      'measurement' , f.measurement,
      'grams',f.grams,
      'nutrition_info', json_build_object(
          'calories',f.calories,
          'protein', f.protein,
          'fat',f.fat,
          'carbs',f.total_carbs
          )
      ))
      ) AS original_food_datas
  FROM user_logs ul
    LEFT JOIN  foods f
      ON ul.food_id = f.id
  where ul.user_id = ? and logged_date = ? and meal_type=? and is_active = true
  GROUP BY ul.meal_type,ul.id`;
};
