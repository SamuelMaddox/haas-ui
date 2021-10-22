import { ReactElement } from "react";
import { Helmet } from "react-helmet";

export default function HomePage(): ReactElement {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <h1>Home</h1>
    </>
  );
}
