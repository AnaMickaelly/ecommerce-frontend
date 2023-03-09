import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Product</h2>
      <h2>{id}</h2>
    </div>
  );
};

export default Product;
