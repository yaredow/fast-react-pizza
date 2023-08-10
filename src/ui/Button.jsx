import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "mt-3 rounded-full text-sm bg-yellow-400  font-semibold uppercase text-stone-700 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " px-3 py-2 md:py-4 md:px-6",
    small: base + " px-4 py-2 text-xs",
    secondary:
      "mt-3 rounded-full text-sm font-semibold uppercase text-stone-400 transition-colors border-2 border-stone-300 duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed px-3 py md:py-3.5 md:px-6",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
