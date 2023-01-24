import { useMutation, QueryClient } from "@tanstack/react-query";
import { TProductivityData } from "../../context/ProductivityContext";
import { supabase } from "../api/config";

const queryClient1 = new QueryClient();

const addEntry = async (newFormData: TProductivityData) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("productivity_entries")
    .insert({ user_id: user?.id, ...newFormData })
    .eq("user_id", user?.id)
    .select();

  if (error) {
    console.log("SUPABASE ERROR", error);
  }

  return data as TProductivityData[];
};

export default function useAddEntry() {
  const mutation = useMutation({
    mutationKey: ["productivityData"],
    mutationFn: addEntry,
    onSuccess: () => {
      queryClient1.invalidateQueries({ queryKey: ["productivityData"] });
    },
  });
  return mutation;
}
