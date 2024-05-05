import { useNavigate } from "react-router-dom";

const Card = () => {
  // Router
  const navigate = useNavigate();

  // Utils
  const products = [
    {
      title: "Nike Air max 270 Series",
      store: "Sarah Closet Store",
      description: "The new nike air max 270 series",
      rating: 4.5,
      price: 400,
      image: "/images/shoe.png",
      id: 1,
    },
    {
      title: "Nike Air max 270 Series",
      store: "Sarah Closet Store",
      description: "The new nike air max 270 series",
      rating: 4.5,
      price: 400,
      image: "/images/shoe.png",
      id: 2,
    },
    {
      title: "Nike Air max 270 Series",
      store: "Sarah Closet Store",
      description: "The new nike air max 270 series",
      rating: 4.5,
      price: 400,
      image: "/images/shoe.png",
      id: 3,
    },
    {
      title: "Nike Air max 270 Series",
      store: "Sarah Closet Store",
      description: "The new nike air max 270 series",
      rating: 4.5,
      price: 400,
      image: "/images/shoe.png",
      id: 4,
    },
    {
      title: "Nike Air max 270 Series",
      store: "Sarah Closet Store",
      description: "The new nike air max 270 series",
      rating: 4.5,
      price: 400,
      image: "/images/shoe.png",
      id: 5,
    },
    {
      title: "Nike Air max 270 Series",
      store: "Sarah Closet Store",
      description: "The new nike air max 270 series",
      rating: 4.5,
      price: 400,
      image: "/images/shoe.png",
      id: 5,
    },
    {
      title: "Nike Air max 270 Series",
      store: "Sarah Closet Store",
      description: "The new nike air max 270 series",
      rating: 4.5,
      price: 400,
      image: "/images/shoe.png",
      id: 6,
    },
    {
      title: "Nike Air max 270 Series",
      store: "Sarah Closet Store",
      description: "The new nike air max 270 series",
      rating: 4.5,
      price: 400,
      image: "/images/shoe.png",
      id: 7,
    },
  ];

  return (
    <div className="product-frame">
      {/*       <img className="product-card" src="/images/card.png" />
       */}{" "}
      {/* <img className="product-card2" src="/images/card.png" />
      <img className="product-card3" src="/images/card.png" />
      <img className="product-card4" src="/images/card.png" />
      <img className="product-card5" src="/images/card.png" />
      <img className="product-card6" src="/images/card.png" />
      <img className="product-card7" src="/images/card.png" />
      <img className="product-card8" src="/images/card.png" />
      <img className="product-card9" src="/images/card.png" /> */}
      {products?.map((product, i) => {
        return (
          <div
            className="product-card"
            key={i}
            onClick={() => {
              navigate(`/${product.id}`);
            }}>
            <img className="shoe" src={product.image} />
            <p className="store-name">{product.store}</p>
            <h3 className="shoe-desc">{product.title}</h3>
            <p className="shoe-info">{product.description}</p>
            <img src="/images/star.png" className="star" />
            <p className="price">${product.price}</p>
          </div>
        );
      })}
      {/* <div className="second-card">
        <img className="shoe" src="/images/shoe.png" />
        <p className="store-name">Sarah Closet Stores</p>
        <h3 className="shoe-desc">Nike Air Max 270 Series</h3>
        <p className="shoe-info">The new Nike air max 270 series</p>
        <img src="/images/star.png" className="star" />
        <p className="price">$400.00</p>
      </div> */}
    </div>
  );
};

export default Card;
