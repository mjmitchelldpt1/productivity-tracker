import { useQuery } from "@tanstack/react-query";
import { TProductivityData } from "../../context/ProductivityContext";
import { queryClient } from "../../main";
import { supabase } from "../api/config";

type TEntry = {
  id: number;
};

const fetchEntry = async (id: number): Promise<TEntry> => {
  const { data, error } = await supabase
    .from("productivity_entries")
    .select()
    .eq("id", id)
    //single returns it as an object rather than an array of 1
    .single();

  if (error) {
    console.log(error);
  }

  return data;
};

export default function useFetchEntry(id: number) {
  const singleEntry = useQuery({
    queryKey: ["entry", id],
    queryFn: () => fetchEntry(id),
    initialData: () => {
      return queryClient
        .getQueryData(["productivityData"])
        ?.find((d) => d.id === id);
    },
  });
  return singleEntry;
}
