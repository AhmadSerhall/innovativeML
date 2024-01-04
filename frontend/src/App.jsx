import './App.css';
import Button from './components/Button';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import TitleLogo from './components/TitleLogo';
import './styles/global.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route className="test" path="/test" element={<TitleLogo/>}/> */}
          {/* <Route className="test" path='/test' element={<NavBar/>}/> */}
          {/* <Route className="test" path="/test" element={<Footer/>}/> */}
          <Route className="test" path="/test" element={<Button/>}/>
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
