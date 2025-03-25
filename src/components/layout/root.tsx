import { Outlet } from "react-router";
import { Header, Footer } from ".";

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
