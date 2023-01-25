import { useQuery } from "@tanstack/react-query";
import { TProductivityData } from "../../context/ProductivityContext";
import { supabase } from "../api/config";

const fetchEntries = async () => {
  const { data, error } = await supabase
    .from("productivity_entries")
    .select()
    .order("created_at", { ascending: false });

  if (!data) {
    console.log("add some handling for no data");
  }

  if (error) {
    console.log("SUPABASE ERROR", error);
  }

  if (data) {
    return data as TProductivityData[];
  }
};

export default function useProductivityData() {
  const productivityData = useQuery({
    queryKey: ["productivityData"],
    queryFn: fetchEntries,
  });
  return productivityData;
}
