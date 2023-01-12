import { useMutation } from "@tanstack/react-query";
import { TProductivityData } from "../../context/ProductivityContext";
import { queryClient } from "../../main";
import { supabase } from "../api/config";

const addEntry = async (newFormData: TProductivityData) => {
  const { data, error } = await supabase
    .from("productivity_entries")
    .insert(newFormData)
    .select();

  if (error) {
    console.log("SUPABASE ERROR", error);
  }

  return data as TProductivityData[];
};

export default function useAddEntry() {
  const mutation = useMutation({
    mutationFn: addEntry,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["productivityData"] });
    },
  });
  return mutation;
}
