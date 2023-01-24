import { supabase } from "../components/api/config";
import { retrieveUser } from "../components/hooks/RetrieveUser";

function About() {
  const data = retrieveUser();

  return (
    <>
      <button onClick={() => console.log(data)}>Console User</button>
    </>
  );
}

export default About;
