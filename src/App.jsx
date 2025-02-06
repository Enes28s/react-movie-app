import { useState } from "react";
import "./styles/App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import { MovieProvider } from "./context/movieContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
