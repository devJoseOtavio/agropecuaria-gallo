import { Link } from 'react-router-dom';

function QuemSomos() {
    return (
      <div>
        <Link to="/">
            <button className="back-button">Voltar</button>
        </Link>
        <h1>Página de QuemSomos</h1>
        <p>Bem-vindo à página de QuemSomos!</p>
      </div>
    );
  }
  
  export default QuemSomos;
  