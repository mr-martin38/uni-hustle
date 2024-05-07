import Business from "../Container/Business";
import Layout from "../Components/Layout/Layout";
import Card from "../Card";
import { products } from "../Utlities/products";

const Home = () => {
  return (
    <Layout>
      <Business />
      <Card products={products} />
    </Layout>
  );
};

export default Home;
