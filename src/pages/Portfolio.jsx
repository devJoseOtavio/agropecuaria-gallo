import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio() {
  const imagens = [
    process.env.PUBLIC_URL + '/img/lavando.jpg',
    process.env.PUBLIC_URL + '/img/lavando2.jpg',
    process.env.PUBLIC_URL + '/img/lavando3.jpg',
    process.env.PUBLIC_URL + '/img/lavando4.jpg',
  ];
  
  return (
    <div className="portfolio-container">
      <Link to="/">
        <button className="back-button">Página Inicial</button>
      </Link>
      <header className="portfolio-header">
        <h1>Portfólio</h1>
      </header>
      <div className="portfolio-grid">
        {imagens.map((src, index) => (
          <div key={index} className="portfolio-card">
            <img src={src} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
