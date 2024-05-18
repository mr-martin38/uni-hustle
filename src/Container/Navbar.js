import { Link } from "react-router-dom";

const Navbar = () => {
  const routes = [
    {
      title: "Products ",
      route: "/products",
    },
    {
      title: "Services ",
      route: "/services",
    },
    {
      title: "Trainings ",
      route: "/trainings",
    },
    {
      title: "Contact Us ",
      route: "/contact-us",
    },
  ];

  return (
    <section className="header">
      <div>
        <img src="/images/uni-logo.png" alt="Logo" />
        <h4>UniHustle</h4>
      </div>
      <div>
        <div>
          <span>Products</span>
          <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.838 8.49598C8.25222 9.08177 7.30247 9.08177 6.71668 8.49598L1.05983 2.83913C0.474042 2.25334 0.474042 1.30359 1.05983 0.717807C1.64562 0.13202 2.59536 0.13202 3.18115 0.717806L7.77734 5.314L12.3735 0.717806C12.9593 0.132019 13.9091 0.132019 14.4949 0.717805C15.0806 1.30359 15.0806 2.25334 14.4949 2.83913L8.838 8.49598Z"
              fill="#0C0C0C"
            />
          </svg>
        </div>
        <div>
          <input placeholder="Search for Products, services and Trainings" />
        </div>
      </div>
      <div>
        {routes.map((data, i) => {
          return (
            <Link to={data.route} key={i}>
              {data.title}
            </Link>
          );
        })}
      </div>
      <div>
        <div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM17 14H7C6.45 14 6 13.55 6 13C6 12.45 6.45 12 7 12H17C17.55 12 18 12.45 18 13C18 13.55 17.55 14 17 14ZM17 11H7C6.45 11 6 10.55 6 10C6 9.45 6.45 9 7 9H17C17.55 9 18 9.45 18 10C18 10.55 17.55 11 17 11ZM17 8H7C6.45 8 6 7.55 6 7C6 6.45 6.45 6 7 6H17C17.55 6 18 6.45 18 7C18 7.55 17.55 8 17 8Z"
              fill="#595E5C"
            />
          </svg>
          <span>0</span>
        </div>

        <div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 3.99999H2V5.99999H4.3L7.58 15C7.78631 15.5835 8.16807 16.089 8.67294 16.4471C9.1778 16.8051 9.78106 16.9983 10.4 17H19V15H10.4C10.1945 14.9999 9.99399 14.9365 9.8258 14.8184C9.6576 14.7003 9.52987 14.5333 9.46 14.34L9 13H18.28C18.714 12.9994 19.1361 12.8576 19.4824 12.596C19.8288 12.3344 20.0806 11.9673 20.2 11.55L22 5.26999C22.0406 5.13868 22.0538 5.00039 22.0386 4.86377C22.0234 4.72715 21.9802 4.59512 21.9117 4.47595C21.8432 4.35677 21.7509 4.25299 21.6404 4.1711C21.53 4.08921 21.4039 4.03096 21.27 3.99999C21.1806 3.98543 21.0894 3.98543 21 3.99999ZM18.25 11H8.25L6.43 5.99999H19.67L18.25 11Z"
              fill="#545454"
            />
            <path
              d="M10.5 21C11.3284 21 12 20.3284 12 19.5C12 18.6716 11.3284 18 10.5 18C9.67157 18 9 18.6716 9 19.5C9 20.3284 9.67157 21 10.5 21Z"
              fill="#545454"
            />
            <path
              d="M16.5 21C17.3284 21 18 20.3284 18 19.5C18 18.6716 17.3284 18 16.5 18C15.6716 18 15 18.6716 15 19.5C15 20.3284 15.6716 21 16.5 21Z"
              fill="#545454"
            />
          </svg>

          <span>0</span>
        </div>

        <div>
          <img src="/images/pfp.jpeg" alt="Profile" />
        </div>
      </div>

      <div>
        <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 4H30" stroke="black" stroke-width="2.5" stroke-linecap="round" />
          <path d="M6 12H30" stroke="black" stroke-width="2.5" stroke-linecap="round" />
          <path d="M6 20H30" stroke="black" stroke-width="2.5" stroke-linecap="round" />
        </svg>
      </div>
    </section>
  );
};

export default Navbar;
