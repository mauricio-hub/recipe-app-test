import './NewRecipes.scss';
import { useQuery } from '@tanstack/react-query';
import RecipeCard from '../RecipeCard/RecipeCard';
import { getRandomRecipes } from '../../services/recipeApi';

function NewRecipes() {
  const { data: recipes, isLoading, error } = useQuery({
    queryKey: ['randomRecipes'],
    queryFn: () => getRandomRecipes(4),
  });

  const width = window.innerWidth;
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  const recipesToShow = recipes
    ? isMobile
      ? recipes.slice(0, 2)
      : isTablet
        ? recipes.slice(0, 3)
        : recipes
    : recipes;

  if (isLoading) {
    return (
      <section className="new-recipes">
        <h2 className="new-recipes__title">Nuevas Recetas</h2>
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
        <h2 className="new-recipes__title">Nuevas Recetas</h2>
        <p>No hay recetas disponibles</p>
      </section>
    );
  }

  return (
    <section className="new-recipes">
      <h2 className="new-recipes__title">Nuevas Recetas</h2>
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
