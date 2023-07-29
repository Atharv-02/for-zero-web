import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OurApproach from "./pages/OurApproach";
import OurProjects from "./pages/OurProjects";
import "./styles/ourApproach.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/our-approach' element={<OurApproach />} />
        <Route path='/our-projects' element={<OurProjects />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
