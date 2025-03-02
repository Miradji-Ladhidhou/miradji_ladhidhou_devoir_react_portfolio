import { Routes, Route } from 'react-router-dom';
import './App.css';
import './css/header.css';
import './css/footer.css';
import './css/home.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import MentionsLégales from './pages/MentionsLégales';




function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/MentionsLégales" element={<MentionsLégales />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

