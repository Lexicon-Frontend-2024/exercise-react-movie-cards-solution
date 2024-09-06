import { ReactElement } from "react";
import { Link } from "react-router-dom";

export function Header(): ReactElement {
  return (
    <header className="header">
      <h1 className="logo">The Movie List</h1>
      <nav className="links">
        <Link className="link" to="/">MovieList</Link>
        <Link className="link" to="/add-move">Add</Link>
      </nav>
    </header>
  );
}
