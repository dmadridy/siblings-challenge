import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

type AuthGuardianProps = {
  children: React.ReactNode;
};

export default function AuthGuardian({ children }: AuthGuardianProps) {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? children : <Navigate to="/" replace />;
}
