import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { supabase } from "../components/api/config";

function Authorize() {
  supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session);
  });
  return (
    <div className="border color-white">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={["google"]}
      />
    </div>
  );
}

export default Authorize;
