import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ArticlePage from './pages/ArticlePage';
import NotFound from './pages/NotFound';
import Footer from './components/footer';
import Sample from './pages/SamplePage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/events" element={<EventsPage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/article" element={<ArticlePage />}></Route>
            <Route path="/sample" element={<Sample />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
