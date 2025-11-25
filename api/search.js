import axios from 'axios';

export default async function handler(req, res) {
  const { query, number = 4 } = req.query;

  try {
    const response = await axios.get(
      'https://api.spoonacular.com/recipes/complexSearch',
      {
        params: {
          query,
          number,
          apiKey: process.env.SPOON_KEY,
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error searching recipes:', error.message);
    res.status(500).json({ error: 'Error fetching recipes' });
  }
}

