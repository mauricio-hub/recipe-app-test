import './styles/global.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Categories from './components/Categories/Categories';
import NewRecipes from './components/NewRecipes/NewRecipes';
import Sponsors from './components/Sponsors/Sponsors';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <NewRecipes />
      <Sponsors />
    </>
  );
}

export default App;
