import { ArrowRight } from "lucide-react";
import { useMatches } from "react-router";

export default function Breadcrumbs() {
  const matches = useMatches();
  const crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb(match.data));

  return (
    <div className="flex space-x-2">
      {crumbs.map((crumb, index) => (
        <div className="flex space-x-2" key={index}>
          <p>{crumb}</p>
          {index < crumbs.length - 1 && <ArrowRight />}
        </div>
      ))}
    </div>
  );
}
