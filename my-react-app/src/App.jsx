import { useState , useEffect} from 'react'
import './App.css'
import Header from './components/header.jsx'
import Sidebar from './components/sidebar.jsx'
import Content from './components/content.jsx'
import Footer from './components/footer.jsx'

function App() {
    const [page, setPage] = useState(() => {
        return localStorage.getItem('page') || 'introduction';
    });

    useEffect(() => {
        localStorage.setItem('page', page);
    }, [page]);

    return (
        <div className="app">
            <Header />
            <div className="main-section">
                <Sidebar setPage={setPage} />
                <div className="content-wrapper">
                    <Content page={page} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App
