import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserProvaider from './store/appContext'
import Home from "./components/Home"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Deportes from './components/Deportes'

function App() {
  return (
    <>
      <UserProvaider>
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:vardeporte" element={<Deportes />} />
          </Routes>
        </Router>
        <Footer />
      </UserProvaider>
    
    
    
    
    
    </>
    
  );
}

export default App;
