import React from "react";
import Breadcrumbs from "./breadcrumbs";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div>
      <Breadcrumbs />
      {children}
    </div>
  );
}
