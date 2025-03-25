import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Navigate } from "react-router-dom";

type GuestGuardianProps = {
  children: React.ReactNode;
};

export default function GuestGuardian({ children }: GuestGuardianProps) {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <Navigate to="/dashboard" replace /> : children;
}
