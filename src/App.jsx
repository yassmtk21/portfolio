import "./App.css";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import NavBar from "./Components/NavBar";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
function App() {
  const location = useLocation();
  return (
    <>
      <div>
        <NavBar />
        <main>
          <AnimatePresence initial={false} mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path={"/"} element={<Navigate to={"/home"} />} />
              <Route path={"/home"} element={<Home />} />
              <Route path={"/about"} element={<About />} />
              <Route path={"/work"} element={<Projects />} />
              <Route path={"/contact"} element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </>
  );
}

export default App;
