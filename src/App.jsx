import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Categories from "./components/pages/Categories";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Administration from "./components/pages/Administration";
import Foot from "./components/Foot";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>

        <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/categories" element={<Categories />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/administration" element={<Administration />}/>
        </Routes>
        </main>

        <footer>
          <Foot />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
