import './Sponsors.scss';
import products from '../../assets/products.png';

function Sponsors() {
  return (
    <section className="sponsors">
      <h2 className="sponsors__title">Con el Patrocinio de</h2>
      <div className="sponsors__products">
        <img src={products} alt="Productos patrocinadores" />
      </div>
    </section>
  );
}

export default Sponsors;
