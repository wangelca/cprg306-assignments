//Week 7 - Meal Ideas
//Angelica Pekas CPRG-306-D
//000906248

'use client';

import React, { useState, useEffect } from 'react';

function MealIdeas({ ingredient, onIngredientSelect }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      if (data.meals) {
        setMeals(data.meals);
      } else {
        console.error('No meals found');
      }
    } catch (error) {
      console.error('Error fetching meal ideas:', error);
    }
  }

  async function fetchMealIngredients(mealId) {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
      const data = await response.json();
      if (data.meals && data.meals.length > 0) {
        const mealData = data.meals[0];
        const mealIngredients = [];
        for (let i = 1; i <= 20; i++) {  
          const ingredient = mealData[`strIngredient${i}`];
          const measure = mealData[`strMeasure${i}`];
          if (ingredient && ingredient.trim() !== '') {
            mealIngredients.push(`${ingredient}: ${measure}`);
          } else {
            break;
          }
        }
        setIngredients(mealIngredients);
        onIngredientSelect(mealIngredients);
      } else {
        console.error('No meal found for id:', mealId);
      }
    } catch (error) {
      console.error('Error fetching meal ingredients:', error);
    }
  }

  function loadMealIdeas() {
    fetchMealIdeas(ingredient);
  }

  function handleMealSelect(meal) {
    setSelectedMeal(meal);
    fetchMealIngredients(meal.idMeal);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Meal Ideas for {ingredient}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ul className="divide-y divide-gray-200">
          {meals && meals.map((meal) => (
            <li key={meal.idMeal} onClick={() => handleMealSelect(meal)} className="cursor-pointer py-3 px-4 hover:bg-gray-100 transition duration-300">
              <span className="block text-lg font-semibold">{meal.strMeal}</span>
              <span className="block text-sm text-gray-600">{meal.strArea}</span>
            </li>
          ))}
        </ul>
        {selectedMeal && (
          <div>
            <h2 className="text-2xl font-semibold mt-4 mb-2">Ingredients for {selectedMeal.strMeal}</h2>
            <ul className="divide-y divide-gray-200">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="py-2 px-4">
                  <span className="block">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default MealIdeas;

