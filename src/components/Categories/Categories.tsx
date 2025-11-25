import './Categories.scss';
import icVegetarianos from '../../assets/ic_vegetarianos.svg';
import icPrincipales from '../../assets/ic_principales.svg';
import icTortas from '../../assets/ic_tortas.svg';
import icRapida from '../../assets/ic_rapida.svg';
import icMenuNinos from '../../assets/ic_menu_ninos.svg';
import icSopas from '../../assets/ic_sopas.svg';

const categories = [
  { name: 'Vegetarianos', icon: icVegetarianos },
  { name: 'Principales', icon: icPrincipales },
  { name: 'Tortas', icon: icTortas },
  { name: 'Rápida', icon: icRapida },
  { name: 'Menú Niños', icon: icMenuNinos },
  { name: 'Sopas', icon: icSopas },
];

function Categories() {
  return (
    <section className="categories">
      {categories.map((category, index) => (
        <div key={index} className="categories__item">
          <img src={category.icon} alt={category.name} className="categories__icon" />
          <span className="categories__name">{category.name}</span>
        </div>
      ))}
    </section>
  );
}

export default Categories;
