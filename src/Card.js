import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AcceptedModal from "./Components/Modals/AcceptedModal";
import ProductModalBody from "./Container/ProductModalBody";

const Card = ({ isProductPage, products }) => {
  // Router
  const navigate = useNavigate();

  //   States
  const [displayProductModal, setDisplyProductModal] = useState(false);

  return (
    <div className="product-frame">
      {displayProductModal && (
        <AcceptedModal
          onClick={() => {
            setDisplyProductModal(false);
          }}
          body={<ProductModalBody />}
        />
      )}
      {isProductPage && <h4 className="more-from">More from Sarah's Closet Store</h4>}
      <div className={isProductPage ? "product-frame-inner-product" : "product-frame-inner"}>
        {products?.map((product, i) => {
          return (
            <div
              className="product-card"
              key={i}
              onClick={() => {
                // navigate(`/${product.id}`);
                setDisplyProductModal(true);
              }}>
              <img className="shoe" src={product.image} />
              <p className="store-name">{product.store}</p>
              <h3 className="shoe-desc">{product.title}</h3>
              <p className="shoe-info">{product.description}</p>
              <img src="/images/star.png" className="star" />
              <img src="/images/star.png" className="star" />
              <img src="/images/star.png" className="star" />
              <img src="/images/star.png" className="star" />
              <img src="/images/star.png" className="star" />

              <p className="price">${product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
