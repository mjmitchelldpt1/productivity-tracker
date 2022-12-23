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
import axios from "axios";

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
    const response = await axios.get(
      `http://localhost:3000/entries?_sort=id&_order=desc`
    );
    const data = response.data;

    setProductivityData(data);
  };

  const addEntry = async (newFormData) => {
    const response = await axios.post(
      `http://localhost:3000/entries`,
      newFormData
    );
    const newEntry = response.data;

    setProductivityData([newEntry, ...productivityData]);
  };

  const deleteEntry = async (id) => {
    await axios.delete(`http://localhost:3000/entries/${id}`);
    setProductivityData(productivityData.filter((item) => item.id !== id));
    setModalOpen(false);
    setEntryId(null);
  };

  const editEntry = (item) => {
    setEntryEditor({
      item,
      edit: true,
    });
  };

  const updateEntry = async (id, updItem) => {
    const response = await axios.put(
      `http://localhost:3000/entries/${id}`,
      updItem
    );

    const updatedItem = response.data;
    setProductivityData(
      productivityData.map((item) => (item.id === id ? updatedItem : item))
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
