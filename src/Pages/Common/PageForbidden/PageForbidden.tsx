import { ReactElement } from "react";
import { useLocation } from "react-router-dom";

export default function PageForbidden(): ReactElement {
  const location = useLocation();

  return (
    <>
      <h1>403 Forbidden</h1>
      <h2>
        You are not authorized to view <code>{location.pathname}</code>
      </h2>
    </>
  );
}
