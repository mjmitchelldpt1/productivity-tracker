import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { API_BASE_URL, supabase } from "../components/api/config";

type ProductictivityProviderProps = {
  children: React.ReactNode;
};

export type TProductivityData = {
  id?: number;
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
  fetchEntries: () => void;
  fetchEntry: (id: number) => void;
  addEntry: (newFormData: TProductivityData) => void;
  deleteEntry: (id: number) => void;
  updateEntry: (id: number, updItem: TProductivityData) => void;
  setProductivityData: (newProductivityData: TProductivityData[]) => void;
  setEntryEditor: (newEntry: TEntryEditor) => void;
  setModalOpen: (modalChange: boolean) => void;
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

  const fetchEntries = async () => {
    const { data, error } = await supabase
      .from("productivity_entries")
      .select();

    if (!data) {
      console.log("add some handling for no data");
    }

    if (error) {
      console.log("SUPABASE ERROR", error);
    }

    if (data) {
      setProductivityData(data);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const addEntry = async (newFormData: TProductivityData) => {
    const { data, error } = await supabase
      .from("productivity_entries")
      .insert(newFormData)
      .select();

    if (error) {
      console.log("SUPABASE ERROR", error);
    }

    if (data) {
      setProductivityData([data[0], ...productivityData]);
    }
  };

  const deleteEntry = async (id: number) => {
    const { data, error } = await supabase
      .from("productivity_entries")
      .delete()
      .eq("id", id)
      .select();

    if (error) {
      console.log(error);
    }
    if (data) {
      setProductivityData(productivityData.filter((item) => item.id !== id));
    }
  };

  const fetchEntry = async (id: number) => {
    const { data, error } = await supabase
      .from("productivity_entries")
      .select()
      .eq("id", id)
      //single returns it as an object rather than an array of 1
      .single();

    if (error) {
      console.log(error);
    }

    if (data) {
      setEntryEditor({
        item: data,
        edit: true,
      });
    }
  };

  const updateEntry = async (id: number, updItem: TProductivityData) => {
    const { data, error } = await supabase
      .from("productivity_entries")
      .update(updItem)
      .eq("id", id)
      .select();

    if (error) {
      console.log(error);
    }

    if (data) {
      console.log(productivityData.filter((item) => item.id !== id));
    }

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
        setProductivityData,
        setEntryEditor,
        setModalOpen,
        fetchEntries,
        addEntry,
        deleteEntry,
        fetchEntry,
        updateEntry,
      }}
    >
      {children}
    </ProductivityContext.Provider>
  );
}

export default ProductivityContext;
