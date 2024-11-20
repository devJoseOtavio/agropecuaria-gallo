import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="center">
          <div className="menu">
            <div className="logo">
              <h3>Agropecuária Gallo</h3>
            </div>
            <div className="item-menu">
              <a href="#">Login</a>
            </div>        
          </div>

          <div className="form">
          <h2>Entre em Contato!</h2>
            <form>
              <div className="items-form">
                <input placeholder="Seu nome" type="text" />
                <input placeholder="Qual pet você tem?" type="text" />
                <input placeholder="Seu nome" type="text" />
                <input placeholder="Seu nome" type="text" />
                <input type="submit" />
              </div>
            </form>
          </div>

        </div>
      </div>    

      <div classname="content">
        <div className="center">
        </div>
      </div>
    </div>
  );
}

export default App;
