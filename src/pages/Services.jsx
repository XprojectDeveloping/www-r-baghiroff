import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <p>Services Page</p>
      <Link to={"/services/:id/:slug"}>Link</Link>
    </>
  );
}
export default Services;
