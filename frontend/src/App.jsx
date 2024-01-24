import './App.css';
import Landing from './pages/Landing';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import './styles/global.css'
import About from './pages/About';
import Contact from './pages/Contact';
import Vision from './components/Vision';
import Puzzle from './pages/Puzzle';
import FAQ from './pages/FAQ'
import Blog from './pages/Blog';
import PrivacyPolicy from './pages/Privacy';
import LearnMore from './pages/LearnMore'
import AiNews from './pages/AINews';
import Support from './pages/Support'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route className="login" path="/login" element={<Login/>}/>
          <Route className="signup" path="/" element={<SignUp/>}/>
          <Route className="signup" path="/signup" element={<SignUp/>}/>
          <Route className="landing" path="/landing" element={<Landing/>}/>
          <Route className="about" path="/about" element={<About/>}/>
          <Route className="contact" path="/contact" element={<Contact/>}/>
          <Route className="vision" path="/vision" element={<Vision/>}/>
          <Route className="contact" path="/contact" element={<Contact/>}/>
          <Route className="puzzle" path="/puzzle" element={<Puzzle/>}/>
          <Route className="faq" path="/faq" element={<FAQ/>}/>
          <Route className="blog" path="/blog" element={<Blog/>}/>
          <Route className="privacy" path="/privacy" element={<PrivacyPolicy/>}/>
          <Route className="learn" path="/learn" element={<LearnMore/>}/>
          <Route className="news" path="/news" element={<AiNews/>}/>
          <Route className="support" path="/support" element={<Support/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
