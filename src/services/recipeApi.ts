import axios from 'axios';
import { fallbackRecipes } from '../data/fallbackRecipes';

export interface Recipe {
  id: number;
  title: string;
  image: string;
  rating?: number;
}

export const getRandomRecipes = async (number: number = 4): Promise<Recipe[]> => {
  try {
    const response = await axios.get('/api/random', {
      params: { number },
    });
    return response.data.recipes.map((recipe: any) => ({
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      rating: recipe.spoonacularScore ? (recipe.spoonacularScore / 20).toFixed(1) : 4.5,
    }));
  } catch (error) {
    console.error('Error fetching recipes from API, using fallback data:', error);
    return fallbackRecipes.slice(0, number);
  }
};

export const getRecipesByCategory = async (category: string): Promise<Recipe[]> => {
  try {
    const response = await axios.get('/api/search', {
      params: {
        query: category,
        number: 4,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching recipes by category from API, using fallback data:', error);
    return fallbackRecipes;
  }
};
