import { Link } from "react-router-dom";

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <div>
      {/* <Link to="/">Главная</Link> */}
      {breadcrumbs.map(({ label, path }, index) => {
        const isLast = index === breadcrumbs.length - 1;

        return isLast ? (
          <span key={label}>{label}</span>
        ) : (
          <>
            <Link key={label} to={path}>
              {label}
            </Link>{" "}
            {">"}{" "}
          </>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
