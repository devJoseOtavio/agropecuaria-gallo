import React from 'react';
import { Link } from 'react-router-dom';
import './QuemSomos.css';

function QuemSomos() {
  return (
    <div className="quem-somos-container">
      <Link to="/">
        <button className="back-button">Página Inicial</button>
      </Link>
      <header className="quem-somos-header">
        <h1>Quem Somos</h1>
      </header>
      <section className="quem-somos-content">
        <div className="text-section">
          <p>
            Bem-vindo à Agropecuária e Petshop Gallo! Localizada em Joinville, 
            nossa história começou há mais de 10 anos, com o compromisso de trazer 
            satisfação e qualidade para nossos clientes. Oferecemos uma ampla 
            variedade de produtos e serviços, sempre pensando no bem-estar de seus 
            pets e na qualidade de sua agropecuária.
          </p>
          <p>
            Nosso objetivo é continuar sendo referência na região, com um atendimento 
            acolhedor e especializado para suprir as suas necessidades e de seus 
            animais. Agradecemos pela confiança ao longo desses anos!
          </p>
        </div>
        <div className="image-section">
          <img src="/img/gilmar.jpg" alt="Gilmar da Agropecuária e Petshop Gallo" />
        </div>
      </section>
    </div>
  );
}

export default QuemSomos;
