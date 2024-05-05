const Navbar = () => {
  return (
    <nav className="navbar">
      <nav className="dashboard">
        <img className="site-logo" src="/images/uni-logo.png" />
        <h1 className="site-name">UniHustle</h1>
        <nav className="search-bar">
          <input type="text" placeholder="Search for Products, services and Trainings" />
        </nav>
        <span className="info">Products</span>
        <span className="info">Services</span>
        <span className="info">Trainings</span>
        <span className="info">Contact Us</span>
        <img className="icons" src="/images/message.jpg" />
        <img className="icons" src="/images/cart.jpg" />
        <img className="pfp" src="/images/pfp.jpeg" />
      </nav>
      {/* <img className="eyes" src="/images/eyes.png" /> */}
    </nav>
  );
};

export default Navbar;
