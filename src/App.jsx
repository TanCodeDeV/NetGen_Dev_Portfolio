import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Body from "./components/Body";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
