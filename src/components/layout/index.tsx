import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <div>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="flights">Flights</NavLink>
    </div>
  );
}

export function Footer() {
  return <div>Footer</div>;
}
