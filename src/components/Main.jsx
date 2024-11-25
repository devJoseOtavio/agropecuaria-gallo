import React, { useState } from 'react';

function Main() {
  const [nome, setNome] = useState('');
  const [interesse, setInteresse] = useState('');
  
  const whatsappNumber = '5547988509407';

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = encodeURIComponent(`Olá, meu nome é ${nome} e estou interessado em: ${interesse}.`);

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="main">
      <div className="center">
        <div className="menu">
          <div className="logo">
            <h1>Agropecuária Gallo</h1>
          </div>
        </div>

        <div className="form">
          <h2>Entre em Contato!</h2>
          <form onSubmit={handleSubmit}>
            <div className="items-form">
              <input 
                placeholder="Seu nome" 
                type="text" 
                value={nome} 
                onChange={(e) => setNome(e.target.value)} 
              />
              <input 
                placeholder="O que você busca?" 
                type="text" 
                value={interesse} 
                onChange={(e) => setInteresse(e.target.value)} 
              />
              <input type="submit" value="Enviar" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Main;
