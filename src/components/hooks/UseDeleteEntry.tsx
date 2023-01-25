import { useMutation, useQueryClient } from "@tanstack/react-query";
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
    return data;
  }
};

export default function useDeleteEntry() {
  const queryClient = useQueryClient();
  const deletedEntryMutation = useMutation({
    mutationFn: deleteEntry,
    mutationKey: ["productivityData"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["productivityData"] });
    },
  });
  return deletedEntryMutation;
}
