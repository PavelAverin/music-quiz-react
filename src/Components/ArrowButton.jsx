import { Link } from "react-router";

export default function ArrowButton({ children }) {
  return (
    <>
      <Link to={children === "<" ? "/" : "/song"} className="arrow">
        {children}
      </Link>
      ;
    </>
  );
}
