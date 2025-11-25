import './RecipeCard.scss';
import { useFavorites } from '../../context/FavoritesContext';
import icStar from '../../assets/ic_star.svg';
import icHeart from '../../assets/ic_heart.svg';

interface RecipeCardProps {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  rating: number;
}

function RecipeCard({ id, image, title, subtitle, rating }: RecipeCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(id);

  const handleFavoriteClick = () => {
    toggleFavorite(id);
  };

  // Separar el título en dos partes si no viene subtitle
  // Limitar a máximo 2 palabras
  const words = title.split(' ').slice(0, 2);
  const titleParts = !subtitle && words.length > 1
    ? { main: words[0], sub: words[1] }
    : { main: words[0], sub: subtitle || words.slice(1).join(' ') };

  return (
    <article className="recipe-card">
      <div className="recipe-card__image-container">
        <img src={image} alt={title} className="recipe-card__image" />
      </div>
      <h3 className="recipe-card__title">
        {titleParts.main} {titleParts.sub && <span className="recipe-card__subtitle">{titleParts.sub}</span>}
      </h3>
      <div className="recipe-card__footer">
        <div className="recipe-card__rating">
          <img src={icStar} alt="Rating" className="recipe-card__star" />
          <span>{rating.toFixed(1)}</span>
        </div>
        <button
          className={`recipe-card__favorite ${favorite ? 'recipe-card__favorite--active' : ''}`}
          onClick={handleFavoriteClick}
        >
          <img src={icHeart} alt="Favorito" />
        </button>
      </div>
      <div className="recipe-card__extra-info">
        <div className="recipe-card__info-item">
          <span className="recipe-card__info-icon">👥</span>
          <p className="recipe-card__info-label">Tamaño de la porción</p>
          <p className="recipe-card__info-value">4 raciones</p>
        </div>
        <div className="recipe-card__info-item">
          <span className="recipe-card__info-icon">⏱️</span>
          <p className="recipe-card__info-label">Tiempo de preparación</p>
          <p className="recipe-card__info-value">30 minutos</p>
        </div>
        <div className="recipe-card__info-item">
          <span className="recipe-card__info-icon">👨‍🍳</span>
          <p className="recipe-card__info-label">Dificultad</p>
          <p className="recipe-card__info-value">Fácil</p>
        </div>
      </div>
    </article>
  );
}

export default RecipeCard;
