import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Nav from "./component/Segment/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/project";
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Business from "./pages/Business";
import Library from "./pages/Library";
import ProjectSection from "./pages/ProjectSection"; 

function App() {
  return (
    <>
      <div className="">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/projectSection" element={<ProjectSection />} />
            <Route path="/service" element={<Service />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/business" element={<Business />} />
            <Route path="/library" element={<Library />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
