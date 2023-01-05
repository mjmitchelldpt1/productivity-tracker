import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../components/api/config";

const ProductivityContext = createContext();

export function ProductivityProvider({ children }) {
  const [productivityData, setProductivityData] = useState([]);
  const [entryEditor, setEntryEditor] = useState({
    itemObj: {},
    edit: false,
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [entryId, setEntryId] = useState(null);

  const fetchEntries = async () => {
    const response = await axios.get(`${API_URL}/entries?_sort=id&_order=desc`);
    setProductivityData(response.data);
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const addEntry = async (newFormData) => {
    const response = await axios.post(`${API_URL}/entries`, newFormData);
    const newEntry = response.data;

    setProductivityData([newEntry, ...productivityData]);
  };

  const deleteEntry = async (id) => {
    await axios.delete(`${API_URL}/entries/${id}`);
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
    const response = await axios.put(`${API_URL}/entries/${id}`, updItem);

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
    <ProductivityContext.Provider
      value={{
        productivityData,
        entryEditor,
        modalOpen,
        entryId,
        setProductivityData,
        setEntryEditor,
        setModalOpen,
        setEntryId,
        fetchEntries,
        addEntry,
        deleteEntry,
        editEntry,
        updateEntry,
      }}
    >
      {children}
    </ProductivityContext.Provider>
  );
}

export default ProductivityContext;
