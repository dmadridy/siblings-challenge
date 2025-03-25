import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { logout } = useAuth0();

  return (
    <div>
      <Link to="flights">Flights</Link>
      <Button onClick={() => logout()}>Log Out</Button>
    </div>
  );
}
