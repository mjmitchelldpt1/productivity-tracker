import { supabase } from "../components/api/config";

function About() {
  async function retrieveUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      console.log(user);
    }
  }

  return <button onClick={() => retrieveUser()}>Console User</button>;
}

export default About;
