import { Link } from 'react-router-dom';

function Localizacao() {
    return (
      <div>
        <Link to="/">
            <button className="back-button">Voltar</button>
        </Link>
        <h1>Página de Localizacao</h1>
        <p>Bem-vindo à página de Localizacao!</p>
      </div>
    );
  }
  
  export default Localizacao;
  