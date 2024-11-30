import React from 'react';
import { Link } from 'react-router-dom';
import './Localizacao.css';

function Localizacao() {
  return (
    <div className="localizacao-container">
      <Link to="/">
        <button className="back-button">Página Inicial</button>
      </Link>
      <header className="localizacao-header">
        <h1>Localização</h1>
      </header>
      <section className="localizacao-content">
        <div className="text-section">
          <p>
            <strong>Endereço:</strong> R. Apus, 1623 - Jardim Paraíso, Joinville - SC, 89226-732
          </p>
          <p>Venha nos visitar e conhecer nossos produtos e serviços!</p>
        </div>

        <div className="map-section">
          <iframe
            title="Mapa Localização Agropecuária e Petshop Gallo"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.624193117108!2d-48.85304262485815!3d-26.28516708291344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deaff30103018b%3A0xa0fa7505b10aa2bb!2sR.%20Apus%2C%201623%20-%20Jardim%20Para%C3%ADso%2C%20Joinville%20-%20SC%2C%2089226-732!5e0!3m2!1sen!2sbr!4v1698490998836!5m2!1sen!2sbr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="image-section">
          <img 
            src={process.env.PUBLIC_URL + '/img/local.jpg'} 
            alt="Localização da Agropecuária e Petshop Gallo" 
          />
        </div>
      </section>
    </div>
  );
}

export default Localizacao;
