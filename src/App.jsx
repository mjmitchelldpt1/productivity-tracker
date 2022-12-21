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
  const [productivityData, setProductivityData] = useState([]);
  const [entryEditor, setEntryEditor] = useState({
    itemObj: {},
    edit: false,
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [entryId, setEntryId] = useState(null);

  const addEntry = (newFormData) => {
    setProductivityData([newFormData, ...productivityData]);
  };

  const deleteEntry = (entryId) => {
    if (entryId !== null) {
      setProductivityData(
        productivityData.filter((item) => item.id !== entryId)
      );
      setModalOpen(false);
      setEntryId(null);
    }
  };

  const editEntry = (item) => {
    setEntryEditor({
      item,
      edit: true,
    });
  };

  const updateEntry = (id, updItem) => {
    setProductivityData(
      productivityData.map((item) => (item.id === id ? updItem : item))
    );
    setEntryEditor({
      item: {},
      edit: false,
    });
  };
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
                  {modalOpen ? (
                    <Modal
                      setModalOpen={setModalOpen}
                      entryId={entryId}
                      deleteEntry={deleteEntry}
                    />
                  ) : null}
                  <ProductivityForm
                    addEntry={addEntry}
                    updateEntry={updateEntry}
                    entryEditor={entryEditor}
                    entryId={entryId}
                  />
                  <ProductivityStats />
                  <ProductivityList
                    productivityData={productivityData}
                    setEntryId={setEntryId}
                    setModalOpen={setModalOpen}
                    editEntry={editEntry}
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
