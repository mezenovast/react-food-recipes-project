import { API_URL, ARI_URL } from "./config";

const getAllCategories = async () => {
   const response = await fetch(API_URL + 'categories.php');
   return await response.json();
}

const getMealById = async (idMeal) => {
   const response = await fetch(API_URL + 'lookup.php?i=' + idMeal);
   return await response.json();
}

const getFilterCategory = async (strMeal) => {
   const response = await fetch(API_URL + 'filter.php?c=' + strMeal);
   return await response.json();
}

export { getAllCategories, getMealById, getFilterCategory }

// List all meal categories
// www.themealdb.com/api/json/v1/1/categories.php

// Lookup full meal details by id
// www.themealdb.com/api/json/v1/1/lookup.php?i=52772

// Filter by Category
// www.themealdb.com/api/json/v1/1/filter.php?c=Seafood