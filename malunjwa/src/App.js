import "./App.css";
import { Footer, Navbar } from "./containers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="gradient__bg">
        <Navbar />
      </div>
      <Routes>
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
