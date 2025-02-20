import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import Home from './pages/Home/Home.tsx';
import Country from './pages/Country/Country.tsx';
import Container from './components/Container/Container.tsx';

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/country/:id/:name"
                            element={<Country />}
                        />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </Container>
            </main>
        </Router>
    );
};

export default App;
