import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
// import OffersPage from './pages/PostPage';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/offers" element={<OffersPage />} /> */}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
