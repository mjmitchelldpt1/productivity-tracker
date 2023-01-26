import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import ProductivityForm from "./components/ProductivityForm";
import ProductivityStats from "./components/ProductivityStats";
import ProductivityList from "./components/ProductivityList";
import About from "./pages/About";
import Login from "./pages/Login";
import HookForm from "./components/HookForm";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-auto items-center flex-col bg-slate-600 text-white text-xl">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <ProductivityForm />
                  <ProductivityStats />
                  <ProductivityList />
                  <HookForm />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
