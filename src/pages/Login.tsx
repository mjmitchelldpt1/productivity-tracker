import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { supabase } from "../components/api/config";

function Login() {
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

export default Login;
