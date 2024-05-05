import Navbar from "../../Container/Navbar";

const Layout = ({ children }) => {
  return (
    <section className="App">
      <div className="header-container">
        <Navbar />
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Layout;
