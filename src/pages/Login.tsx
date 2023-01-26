import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { supabase } from "../components/api/config";

function Login() {
  return (
    <div className=" bg-amber-300 mt-4">
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
