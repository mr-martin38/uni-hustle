import Navbar from "../../Container/Navbar";

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
