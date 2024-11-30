import React, { useState } from 'react';

function Main() {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  
  const whatsappNumber = '5547988509407';

  const formatDate = (date) => {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formattedDate = formatDate(data);
    
    const message = encodeURIComponent(
      `Olá, meu nome é ${nome} e gostaria de agendar um banho para o meu pet no dia ${formattedDate} às ${hora}.`
    );
    
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
          <h2>Agende o Banho do seu Pet!</h2>
          <form onSubmit={handleSubmit}>
            <div className="items-form">
              <input 
                placeholder="Seu nome" 
                type="text" 
                value={nome} 
                onChange={(e) => setNome(e.target.value)} 
                required 
              />
              <input 
                placeholder="Data" 
                type="date" 
                value={data} 
                onChange={(e) => setData(e.target.value)} 
                required 
              />
              <input 
                placeholder="Hora" 
                type="time" 
                value={hora} 
                onChange={(e) => setHora(e.target.value)} 
                required 
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
