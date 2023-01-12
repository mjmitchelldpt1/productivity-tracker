import { useMutation } from "@tanstack/react-query";
import { TProductivityData } from "../../context/ProductivityContext";
import { supabase } from "../api/config";

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
      return data
    }
  };

export default function useDeleteEntry() {
    const deletedEntry = useMutation({
      queryKey: ["productivityData"],
      queryFn: deleteEntry,
    });
    return deletedEntry