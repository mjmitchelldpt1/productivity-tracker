import { supabase } from "../api/config";

export async function retrieveUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    console.log(user);
    return user.id;
  }
}
