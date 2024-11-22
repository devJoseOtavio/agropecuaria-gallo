import './App.css';
import Main from './components/Main';
import Content from './components/Content';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Produtos from './pages/Produtos';
import Portfolio from './pages/Portfolio';
import QuemSomos from './pages/QuemSomos';
import Localizacao from './pages/Localizacao';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/* Exibe o Main apenas na página inicial */}
      {location.pathname === '/' && <Main />}
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/quemsomos" element={<QuemSomos />} />
        <Route path="/localizacao" element={<Localizacao />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
