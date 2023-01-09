import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../components/api/config";
import { type } from "os";

type ProductictivityProviderProps = {
  children: React.ReactNode;
};

export type TProductivityData = {
  id?: number;
  date: Date | string;
  topic: string;
  rating: string;
  achievement: string;
  struggle: string;
  journal: string;
  plan: string;
};

type EmptyObject = Record<any, never>;

type TEntryEditor = {
  item: TProductivityData | EmptyObject;
  edit: boolean;
};

export type TProductivityContext = {
  productivityData: Array<TProductivityData>;
  entryEditor: TEntryEditor;
  modalOpen: boolean;
  entryId: number;
  fetchEntries: () => void;
  addEntry: (newFormData: TProductivityData) => void;
  deleteEntry: (id: number) => void;
  editEntry: (item: TProductivityData) => void;
  updateEntry: (id: number, updItem: TProductivityData) => void;
  setProductivityData: (newProductivityData: TProductivityData[]) => void;
  setEntryEditor: (newEntry: TEntryEditor) => void;
  setModalOpen: (modalChange: boolean) => void;
  setEntryId: React.Dispatch<React.SetStateAction<number | null>>;
};

const ProductivityContext = createContext<TProductivityContext>(
  {} as TProductivityContext
);

export function ProductivityProvider({
  children,
}: ProductictivityProviderProps): JSX.Element {
  const [productivityData, setProductivityData] = useState<TProductivityData[]>(
    []
  );
  const [entryEditor, setEntryEditor] = useState<TEntryEditor>({
    item: {},
    edit: false,
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [entryId, setEntryId] = useState<number | null>(null);

  const fetchEntries = async () => {
    const response = await axios.get(`${API_URL}/entries?_sort=id&_order=desc`);
    setProductivityData(response.data);
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const addEntry = async (newFormData: TProductivityData) => {
    const response = await axios.post(`${API_URL}/entries`, newFormData);
    const newEntry = response.data;

    setProductivityData([newEntry, ...productivityData]);
  };

  const deleteEntry = async (id: number) => {
    await axios.delete(`${API_URL}/entries/${id}`);
    setProductivityData(productivityData.filter((item) => item.id !== id));
    setModalOpen(false);
    setEntryId(null);
  };

  const editEntry = (item: TProductivityData) => {
    setEntryEditor({
      item,
      edit: true,
    });
  };

  const updateEntry = async (id: number, updItem: TProductivityData) => {
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
