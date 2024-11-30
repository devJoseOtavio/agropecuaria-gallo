import './Produtos.css';
import { Link } from 'react-router-dom';

function Produtos() {
  const images = [
    { src: '/img/catalogo.jpg' },
    { src: '/img/estoque.jpg' },
    { src: '/img/estoque2.jpg' },
    { src: '/img/estoque3.jpg' },
  ];

  return (
    <div className="produtos-container">
      <Link to="/">
        <button className="back-button">Página Inicial</button>
      </Link>
      <h1>Página de Produtos</h1>
      <div className="produtos-grid">
        {images.map((image, index) => (
          <div key={index} className="produtos-card">
            <img src={image.src} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produtos;
