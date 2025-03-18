import { BrowserRouter, Route, Routes } from "react-router"; // Fix import
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Body from "./components/Body";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<Home />} /> {/* Default Home Page */}
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
