import { useState } from "react";
import "./styles/App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import WatchLater from "./pages/WatchLater";
import { MovieProvider } from "./context/movieContext";
import Watched from "./pages/Watched";

function App() {
  const [count, setCount] = useState(0);

  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/watched" element={<Watched />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
