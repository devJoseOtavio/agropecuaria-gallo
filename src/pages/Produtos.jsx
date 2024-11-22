import { Link } from 'react-router-dom';

function Produtos() {
  return (
    <div>
        <Link to="/">
            <button className="back-button">Voltar</button>
        </Link>
        <h1>Página de Produtos</h1>
        <p>Bem-vindo à página de produtos!</p>
    </div>
  );
}

export default Produtos;
