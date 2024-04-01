import MainPage from "./Compoents/MainPage";
import About from "./Compoents/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
