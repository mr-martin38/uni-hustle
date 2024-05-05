const Business = () => {
  return (
    <nav className="business-card">
      <div className="business-card-inner">
        <div>
          <img className="business-logo" src="/images/uni-logo.png" />
        </div>
        <div>
          <div>
            <h2 className="business-name">Sarah's Closet Store</h2>
            <p className="desription">Business Account</p>
          </div>
          <div>
            <p className="order-status">Orders Completed</p>
            <p className="order-per">95% orders completed</p>
          </div>
        </div>

        <div>
          <div>
            <h3 className="business-type">Higher Institution</h3>
            <p className="uni">University of Lagos</p>
          </div>
          {/* <p className="verified">Verified</p> */}
          <div>
            <h3 className="about">About Business</h3>
            <p className="summary">
              I sell all types of clothes ranging from tees to cargos and others at very affordable prices with high
              quality
            </p>
          </div>
        </div>
      </div>
      <img className="eyes" src="/images/eyes.png" />
    </nav>
  );
};

export default Business;
