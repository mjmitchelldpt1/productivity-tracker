import { createClient } from "@supabase/supabase-js";

export const API_BASE_URL = import.meta.env.VITE_LOCAL_API_URL;

//for querying and manage data
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
