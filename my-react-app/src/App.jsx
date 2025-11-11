import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Content from './components/content'
import Footer from './components/footer'

function App() {
    const [page, setPage] = useState('introduction');

    return (
        <div className="app">
            <Header />
            <div className="main-section">
                <Sidebar setPage={setPage} />
                <Content page={page} />
            </div>
            <Footer />
        </div>
    );
}

export default App
