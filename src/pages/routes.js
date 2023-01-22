import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Movie from './Movie';
import Favorites from './Favorites';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Err from './Err';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<Movie />} />
                <Route path="/favorites" element={< Favorites />} />
                <Route path="*" element={< Err />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default RoutesApp;