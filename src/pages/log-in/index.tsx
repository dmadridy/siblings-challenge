import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";

export default function LogIn() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <Button onClick={() => loginWithRedirect()}>Log In</Button>
      <Button>Sign Up</Button>
    </div>
  );
}
