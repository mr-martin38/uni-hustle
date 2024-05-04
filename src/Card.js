const Card = () => {
  return (
    <div className="product-frame">
      <div className="product-card">
        <img className="shoe" src="/images/shoe.png" />
        <p className="store-name">Sarah Closet Stores</p>
        <h3 className="shoe-desc">Nike Air Max 270 Series</h3>
        <p className="shoe-info">The new Nike air max 270 series</p>
        <img src="/images/star.png" className="star" />
        <p className="price">$400.00</p>
      </div>
    </div>
  );
};

export default Card;
