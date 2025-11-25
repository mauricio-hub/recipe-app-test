import cherries from '../assets/ic_cherries.png';
import roastedCarrot from '../assets/ic_roasted_carrot.png';
import colaChicken from '../assets/ic_cola_chicken.png';
import ojingeoMuchim from '../assets/ic_ojingeo_muchim.png';

interface Recipe {
  id: number;
  title: string;
  image: string;
  rating?: number;
}

export const fallbackRecipes: Recipe[] = [
  {
    id: 1,
    title: 'Cerezas Caramelizadas',
    image: cherries,
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Zanahoria Asada',
    image: roastedCarrot,
    rating: 4.5,
  },
  {
    id: 3,
    title: 'Pollo con Cola',
    image: colaChicken,
    rating: 4.7,
  },
  {
    id: 4,
    title: 'Ojingeo Muchim',
    image: ojingeoMuchim,
    rating: 4.6,
  },
];
