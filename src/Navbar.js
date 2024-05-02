const Navbar = () => {
  return (
    <nav className="navbar">
      <nav className="dashboard">
        <img className="site-logo" src="/images/uni-logo.png" />
        <h1 className="site-name">UniHustle</h1>
        <nav className="search-bar">
          <input type="text" placeholder="Search for Products, services and Trainings" />
        </nav>
        <span>Products</span>
        <span>Services</span>
        <span>Trainings</span>
        <span>Contact Us</span>
      </nav>
      <img className="eyes" src="/images/eyes.png" />
    </nav>
  );
};

export default Navbar;
