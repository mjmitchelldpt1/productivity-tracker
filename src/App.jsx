import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Modal from "./components/shared/Modal";
import ProductivityForm from "./components/ProductivityForm";
import ProductivityStats from "./components/ProductivityStats";
import ProductivityList from "./components/ProductivityList";
import About from "./pages/About";
import Login from "./pages/Login";
import { ProductivityProvider } from "./context/ProductivityContext";
import ProductivityContext from "./context/ProductivityContext";
import { useContext } from "react";

function App() {
  return (
    <ProductivityProvider>
      <Router>
        <div className="flex flex-col h-screen">
          <Navbar />
          <main className="flex flex-auto items-center flex-col  bg-slate-400 text-white text-xl">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <ProductivityForm />
                    <ProductivityStats />
                    <ProductivityList />
                  </>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ProductivityProvider>
  );
}
export default App;
