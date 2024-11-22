import { Link } from 'react-router-dom';

function Content() {
  return (
    <div className="content">
      <div className="grid-layout">
        <div className="content-single">
          <h3>Produtos</h3>
          <Link to="/produtos">
            <img src="https://via.placeholder.com/150" alt="Produtos" />
          </Link>
        </div>
        <div className="content-single">
          <h3>Portfólio</h3>
          <Link to="/portfolio">
            <img src="https://via.placeholder.com/150" alt="Portfólio" />
          </Link>
        </div>
        <div className="content-single">
          <h3>Quem Somos</h3>
          <Link to="/quemsomos">
            <img src="https://via.placeholder.com/150" alt="Quem Somos" />
          </Link>
        </div>
        <div className="content-single">
          <h3>Localização</h3>
          <Link to="/localizacao">
            <img src="https://via.placeholder.com/150" alt="Localização" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Content;
