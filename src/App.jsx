import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Modal from "./components/shared/Modal";
import ProductivityForm from "./components/ProductivityForm";
import ProductivityStats from "./components/ProductivityStats";
import ProductivityList from "./components/ProductivityList";
import About from "./pages/About";
import Login from "./pages/Login";

function App() {
  const [productivityData, setProductivityData] = useState([
    {
      id: 1,
      date: "12-19-2022",
      topic: "React",
      rating: 8,
      achievement:
        "Work through react forms and start state for my react form.  Website design",
      struggle: "remembering how to add certain aspects of event handlers",
      journal:
        "Today I experimented with the use of chatGPT to help me write code for my application to track my productivity.  I had a few distractions, but they were minimal today.  Overall my focus is not as I would like it to be.  I need to train and push through this.  Remember the pain of the job interview and continue to push",
      plan: "Set up mockAPI for my data and have my data populate on create new post.  Sort by date.",
    },
    {
      id: 2,
      date: "today",
      topic: "React",
      rating: 3,
      achievement: "learned doctors",
      struggle: "existence is pain",
      journal: "you journal",
      plan: "finish me",
    },
    {
      id: 3,
      date: "today",
      topic: "React",
      rating: 5,
      achievement: "sort it out mate",
      struggle: "distractions",
      journal: "where am i",
      plan: "procrastinate",
    },
  ]);
  const [modal, setModal] = useState({
    isModalOpen: false,
    confirmDelete: false,
  });

  const { isModalOpen, confirmDelete } = modal;

  const addEntry = (newFormData) => {
    setProductivityData([newFormData, ...productivityData]);
  };

  const deleteEntry = (id) => {
    setModal({ isModalOpen: true });
    if (confirmDelete) {
      setProductivityData(productivityData.filter((item) => item.id !== id));
      setModal({ confirmDelete: false, isModalOpen: false });
    }
  };

  const editEntry = (editEntry) => {
    console.log(editEntry);
  };
  console.log(modal);
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />
        <main className="flex flex-auto items-center flex-col  bg-slate-400 text-white text-xl">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {isModalOpen ? <Modal setModal={setModal} /> : null}
                  <ProductivityForm addEntry={addEntry} />
                  <ProductivityStats />
                  <ProductivityList
                    productivityData={productivityData}
                    deleteEntry={deleteEntry}
                  />
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
  );
}
export default App;
