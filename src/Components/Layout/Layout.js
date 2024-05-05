import Navbar from "../../Navbar";

const Layout = ({ children }) => {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Layout;
