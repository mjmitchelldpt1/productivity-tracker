import { useMutation } from "@tanstack/react-query";
import { TProductivityData } from "../../context/ProductivityContext";
import { supabase } from "../api/config";

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
    return data;
  }

  // setEntryEditor({
  //   item: {},
  //   edit: false,
  // });
};

export default function useUpdateEntry(id: number, updItem: TProductivityData) {
  const updatedEntry = useMutation({
    mutationKey: ["productivityData"],
    mutationFn: updateEntry,
  });
  return updatedEntry;
}
