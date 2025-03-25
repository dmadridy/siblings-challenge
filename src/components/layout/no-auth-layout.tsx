import React from "react";

type NoAuthLayoutProps = {
  children: React.ReactNode;
};

export default function NoAuthLayout({ children }: NoAuthLayoutProps) {
  return (
    <div>
      <p>This is not a protected route</p>
      {children}
    </div>
  );
}
