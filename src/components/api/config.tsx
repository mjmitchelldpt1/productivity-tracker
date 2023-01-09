import { createClient } from "@supabase/supabase-js";

export const API_BASE_URL = import.meta.env.VITE_LOCAL_API_URL;

//for querying and manage data
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
