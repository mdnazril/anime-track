import Lenis from 'lenis'
import './App.css'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Details from './pages/Details';
import NotFoundPage from './pages/NotFoundPage';

function App() {

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    })

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/anime/:id" element={<Details />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    )
}

export default App
