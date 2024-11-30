import './Produtos.css';
import { Link } from 'react-router-dom';

function Produtos() {
  const images = [
    { src: process.env.PUBLIC_URL + '/img/catalogo.jpg' },
    { src: process.env.PUBLIC_URL + '/img/estoque.jpg' },
    { src: process.env.PUBLIC_URL + '/img/estoque2.jpg' },
    { src: process.env.PUBLIC_URL + '/img/estoque3.jpg' },
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
            <img src={image.src} alt={`Produto ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produtos;
