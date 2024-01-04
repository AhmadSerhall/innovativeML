import './App.css';
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
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
