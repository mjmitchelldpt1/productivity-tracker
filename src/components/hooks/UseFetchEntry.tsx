import { useQuery } from "@tanstack/react-query";
import { TProductivityData } from "../../context/ProductivityContext";
import { supabase } from "../api/config";

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
    return data;
  }
};

export default function useFetchEntry() {
  const productivityEntry = useQuery({
    queryKey: ["productivity_entries"],
    queryFn: fetchEntry,
  });
  return productivityEntry;
}
