import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ServiceHistory from './pages/ServiceHistory';
import Layout from './components/layout/Layout';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/service_history" element={<ServiceHistory />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
