import './App.css';
import Button from './components/Button';
import Footer from './components/Footer';
import Input from './components/Input';
import NavBar from './components/NavBar';
import TitleLogo from './components/TitleLogo';
import Landing from './pages/Landing';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import './styles/global.css'
import About from './pages/About';
import Contact from './pages/Contact';
import Vision from './components/Vision';
import Puzzle from './pages/Puzzle';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route className="test" path="/test" element={<TitleLogo/>}/> */}
          {/* <Route className="test" path='/test' element={<NavBar/>}/> */}
          {/* <Route className="test" path="/test" element={<Footer/>}/> */}
          {/* <Route className="test" path="/test" element={<Button/>}/> */}
          {/* <Route className="test" path="/test" element={<Input/>}/> */}
          <Route className="login" path="/login" element={<Login/>}/>
          <Route className="signup" path="/signup" element={<SignUp/>}/>
          <Route className="landing" path="/landing" element={<Landing/>}/>
          <Route className="about" path="/about" element={<About/>}/>
          <Route className="contact" path="/contact" element={<Contact/>}/>
          <Route className="vision" path="/vision" element={<Vision/>}/>
          <Route className="contact" path="/contact" element={<Contact/>}/>
          <Route className="puzzle" path="/puzzle" element={<Puzzle/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
