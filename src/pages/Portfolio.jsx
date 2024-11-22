import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <div>
      <Link to="/">
            <button className="back-button">Voltar</button>
        </Link>
      <h1>Página de Portfolio</h1>
      <p>Bem-vindo à página de Portfolio!</p>
    </div>
  );
}

export default Portfolio;
