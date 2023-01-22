import { useRef, useState } from "react";
import { supabase } from "../components/api/config";

type THelperText = {
  error: boolean | null;
  text: string | null;
};

const Login = () => {
  const [helperText, setHelperText] = useState<THelperText>({
    error: null,
    text: "Helper Text",
  });
  const [userName, setUserName] = useState<string | undefined>();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = async (type: string) => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const {
      data: { user },
      error,
    } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setHelperText({ error: true, text: error.message });
    }
    console.log(user);
    setUserName(user?.email);
  };

  const handleOAuthLogin = async (provider: any) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.log("Error: ", error.message);
    }
  };

  async function handleLogout(): Promise<void> {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error: ", error.message);
    }
    setHelperText({
      error: null,
      text: "Logout Successful",
    });
    setUserName(null);
  }

  return (
    <div
      className={
        "w-full h-full sm:h-auto sm:w-2/5 max-w-sm p-5 bg-white shadow flex flex-col text-base text-neutral-900"
      }
    >
      <h1>Username: {userName}</h1>
      <span
        className={
          "font-sans text-4xl text-center pb-2 mb-1 border-b mx-4 align-center"
        }
      >
        Login
      </span>
      <label className={"mt-3 mb-2 font-medium text-lg"} htmlFor={"email"}>
        <span className={"font-mono mr-1 text-red-400"}>*</span>Email:
      </label>
      <input
        className={"bg-gray-100 border py-1 px-3"}
        type={"email"}
        name={"email"}
        ref={emailRef}
        required
      />
      <label className={"mt-3 mb-2 font-medium text-lg"} htmlFor={"password"}>
        <span className={"font-mono mr-1 text-red-400"}>*</span>
        Password:
      </label>
      <input
        className={"bg-gray-100 border py-1 px-3"}
        type={"password"}
        name={"password"}
        ref={passwordRef}
        required
      />

      {helperText.text && (
        <div
          className={`border px-1 py-2 my-2 text-center text-sm ${
            helperText.error
              ? "bg-red-100 border-red-300 text-red-400"
              : "bg-green-100 border-green-300 text-green-500"
          }`}
        >
          {helperText.text}
        </div>
      )}
      <div className="mt-2 flex">
        <span className="block mx-1.5 w-full rounded-md shadow-sm">
          <button
            type="submit"
            onClick={() => handleLogin("REGISTER").catch(console.error)}
            className={
              "border w-full border-blue-600 text-blue-600 flex justify-center py-2 px-4 text-sm font-medium rounded-md hover:bg-blue-200 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
            }
          >
            Sign Up
          </button>
        </span>
        <span className="block w-full mx-1.5 rounded-md shadow-sm">
          <button
            onClick={() => handleLogin("LOGIN")}
            type="button"
            className="flex w-full justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
          >
            Sign In
          </button>
        </span>
      </div>
      <div className="mt-3">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full mx-1.5 border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm leading-5">
            <span className="px-2 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <div>
          <div className="mt-3">
            <span className="block rounded-md shadow-sm">
              <button
                onClick={() => handleOAuthLogin("google")}
                type="button"
                className="w-3/4 mx-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
              >
                Google
              </button>
              <button
                onClick={() => handleLogout()}
                type="button"
                className="w-3/4 mx-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
              >
                Log Out
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
