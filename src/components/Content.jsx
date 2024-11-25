import { Link } from 'react-router-dom';

function Content() {
  return (
    <div className="content">
      <div className="grid-layout">
        <div className="content-single">
          <h3>Produtos</h3>
          <Link to="/produtos">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/616/616554.png" 
              alt="Produtos (Pote de Ração)" 
            />
          </Link>
        </div>
        <div className="content-single">
          <h3>Portfólio</h3>
          <Link to="/portfolio">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2447/2447870.png" 
              alt="Portfólio (Cachorro)" 
            />
          </Link>
        </div>
        <div className="content-single">
          <h3>Quem Somos</h3>
          <Link to="/quemsomos">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" 
              alt="Quem Somos" 
            />
          </Link>
        </div>
        <div className="content-single">
          <h3>Localização</h3>
          <Link to="/localizacao">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/684/684908.png" 
              alt="Localização" 
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Content;
