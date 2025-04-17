import { Link } from "react-router";

export default function Card({ onClick, isActive, children }) {
  return (
    <Link to="/question" className={`card ${isActive ? "active" : ""}`}>
      {children}
    </Link>
  );
}
