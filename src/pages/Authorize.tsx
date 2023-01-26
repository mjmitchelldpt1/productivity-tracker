import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { supabase } from "../components/api/config";

function Authorize() {
  return (
    <div>
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
