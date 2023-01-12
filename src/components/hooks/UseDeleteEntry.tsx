import { useMutation } from "@tanstack/react-query";
import { supabase } from "../api/config";
import { queryClient } from "../../main";

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
    return data;
  }
};

export default function useDeleteEntry() {
  const deletedEntry = useMutation({
    mutationFn: deleteEntry,
    mutationKey: ["productivityData"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["productivityData"] });
    },
  });
  return deletedEntry;
}
