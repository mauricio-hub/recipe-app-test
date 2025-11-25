import './Hero.scss';
import banner from '../../assets/banner.png';

function Hero() {
  return (
    <section className="hero">
      <img src={banner} alt="Recetas para todos" className="hero__image" />
      <div className="hero__content">
        <h1 className="hero__title">Recetas</h1>
        <p className="hero__subtitle">para todos</p>
      </div>
    </section>
  );
}

export default Hero;
