import "./App.css";
import Footer from "./components/main/Footer/Footer";
import Header from "./components/main/Header/Header";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
