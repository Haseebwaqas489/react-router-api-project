
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>
        Sorry, the page you are looking for does not exist.
      </p>

      <NavLink to="/" className="home-btn">
        Go Back Home
      </NavLink>
    </div>
  );
}

export default NotFound;

