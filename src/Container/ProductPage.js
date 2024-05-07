import Card from "../Card";
import Layout from "../Components/Layout/Layout";

const ProductPage = () => {
  return (
    <Layout>
      <p className="product-path">Home / Sarah's Closet Store / Sneakers </p>
      <div className="product-shoe">
        <img className="product-shoe" src="/images/shoe2.png" />
      </div>
      <div className="product-details">
        <h1>Nike Air Max 270 Series</h1>
        <br />
        <p className="product-content">
          Original Grade 1 sneakers from the Nike-Jordan Brand. Available in varying sizes 39 to 45. Available for both
          male and female. All sneakers come in branded boxes
        </p>
        <br />
        <p>
          <b>N2,500</b>
        </p>
        <br />
        <p>Rating</p>
        <img src="/images/star.png" className="star3" />
        <img src="/images/star.png" className="star3" />
        <img src="/images/star.png" className="star3" />
        <img src="/images/star.png" className="star3" />
        <img src="/images/star.png" className="star3" /> <br />
        <br />
        <p className="stock">6 left in stock</p>
        <button className="submit" type="submit" value="Add to Cart">
          Add to Cart
        </button>
        <button className="message-business" type="">
          Message Business
        </button>
      </div>

      <div className="sold">
        <h2 className="trader">SOLD BY</h2>
        <p className="trader-desc">Sarah's Closet Store</p>
        <div className="list">
          <ul>
            <li>80% Store rating</li>
            <li>95% order completion rate</li>
            <li>48 products</li>
            <li>All Products verfied by UniHustle</li>
          </ul>
          <a href="#">Go to Business</a>
        </div>
      </div>
      <Card isProductPage />
    </Layout>
  );
};

export default ProductPage;
