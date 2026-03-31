import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './Splash';
import Projects from './Projects';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;