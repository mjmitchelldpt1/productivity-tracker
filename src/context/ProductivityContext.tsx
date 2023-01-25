import { createContext, useState } from "react";
import { supabase } from "../components/api/config";

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
  formData: TProductivityData[];
};

const ProductivityContext = createContext<TProductivityContext>(
  {} as TProductivityContext
);

export function ProductivityProvider({
  children,
}: ProductictivityProviderProps): JSX.Element {
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
  };
  return (
    <ProductivityContext.Provider value={{}}>
      {children}
    </ProductivityContext.Provider>
  );
}

export default ProductivityContext;
