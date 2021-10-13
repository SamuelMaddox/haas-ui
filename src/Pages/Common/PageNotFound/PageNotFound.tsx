import { ReactElement } from "react";
import { useLocation } from "react-router-dom";

export default function PageNotFound(): ReactElement {
  const location = useLocation();

  return (
    <>
      <h1>404 Page Not Found</h1>
      <h2>
        No match for <code>{location.pathname}</code>
      </h2>
    </>
  );
}
