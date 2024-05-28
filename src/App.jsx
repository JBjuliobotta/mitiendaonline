import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
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
        </Routes>
        </main>

        <footer></footer>
      </BrowserRouter>
    </>
  );
}

export default App;
