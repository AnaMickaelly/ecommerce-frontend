import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

const Product = () => {
  const { id } = useParams();

  return (
    <div>
      <Header />
      <h2>Product</h2>
      <h2>{id}</h2>
      <Footer />
    </div>
  );
};

export default Product;
