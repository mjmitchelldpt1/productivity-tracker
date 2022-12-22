import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    const response = await fetch(
      `http://localhost:3000/entries?_sort=id&_order=desc`
    );
    const data = await response.json();

    setProductivityData(data);
  };

  const addEntry = async (newFormData) => {
    const response = await fetch(`http://localhost:3000/entries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFormData),
    });

    const data = await response.json();

    setProductivityData([data, ...productivityData]);
  };

  const deleteEntry = async (id) => {
    if (id !== null) {
      await fetch(`http://localhost:3000/entries/${id}`, {
        method: "DELETE",
      });
      setProductivityData(productivityData.filter((item) => item.id !== id));
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

  const updateEntry = async (id, updItem) => {
    const response = await fetch(`http://localhost:3000/entries/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });
    const data = await response.json();
    setProductivityData(
      productivityData.map((item) => (item.id === id ? data : item))
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
                  />
                  <ProductivityStats productivityData={productivityData} />
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
