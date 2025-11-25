import axios from 'axios';

const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY || 'demo';
const BASE_URL = 'https://api.spoonacular.com/recipes';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY,
  },
});

export interface Recipe {
  id: number;
  title: string;
  image: string;
  rating?: number;
}

export const getRandomRecipes = async (number: number = 4): Promise<Recipe[]> => {
  try {
    const response = await api.get('/random', {
      params: { number },
    });
    return response.data.recipes.map((recipe: any) => ({
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      rating: recipe.spoonacularScore ? (recipe.spoonacularScore / 20).toFixed(1) : 4.5,
    }));
  } catch (error) {
    console.error('Error fetching recipes:', error);
    // Fallback a datos locales si falla la API
    return [];
  }
};

export const getRecipesByCategory = async (category: string): Promise<Recipe[]> => {
  try {
    const response = await api.get('/complexSearch', {
      params: {
        query: category,
        number: 4,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching recipes by category:', error);
    return [];
  }
};
