import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className = "text-sm text-blue-500 hover:text-blue-700";

  if (to === "-1")
    return (
      <Link className={className} onClick={() => navigate(-1)}>
        &larr; Go back
      </Link>
    );
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
