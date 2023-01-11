import { createClient } from "@supabase/supabase-js";

export const API_BASE_URL = import.meta.env.VITE_LOCAL_API_URL;

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
