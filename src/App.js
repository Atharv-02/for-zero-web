import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OurApproach from "./pages/OurApproach";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/our-approach' element={<OurApproach />} />
      </Routes>
    </div>
  );
}

export default App;
