import './NewRecipes.scss';
import { useQuery } from '@tanstack/react-query';
import RecipeCard from '../RecipeCard/RecipeCard';
import { getRandomRecipes } from '../../services/recipeApi';
import titleImage from '../../assets/n.png';

function NewRecipes() {
  const { data: recipes, isLoading, error } = useQuery({
    queryKey: ['randomRecipes'],
    queryFn: () => getRandomRecipes(4),
  });

  
  const recipesToShow = recipes;

  if (isLoading) {
    return (
      <section className="new-recipes">
        <img src={titleImage} alt="Nuevas Recetas" className="new-recipes__title" />
        <p>Cargando recetas...</p>
      </section>
    );
  }

  if (error) {
    console.error('Query error in NewRecipes:', error);
  }

  if (!recipes || recipes.length === 0) {
    return (
      <section className="new-recipes">
        <img src={titleImage} alt="Nuevas Recetas" className="new-recipes__title" />
        <p>No hay recetas disponibles</p>
      </section>
    );
  }

  return (
    <section className="new-recipes">
      <img src={titleImage} alt="Nuevas Recetas" className="new-recipes__title" />
      <div className="new-recipes__grid">
        {recipesToShow?.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            image={recipe.image}
            title={recipe.title}
            rating={Number(recipe.rating) || 4.5}
          />
        ))}
      </div>
    </section>
  );
}

export default NewRecipes;
