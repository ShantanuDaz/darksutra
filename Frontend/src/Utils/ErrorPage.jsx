import { useRouteError } from "react-router-dom";
import "./Utils.css";
import { Link } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <section id="error-page">
      <article>
        <h1>Oops! {error.status}</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <p>
          Please Go Back To <Link to={"/"}>Home</Link>
        </p>
      </article>
    </section>
  );
}
