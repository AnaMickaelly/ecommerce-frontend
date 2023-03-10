import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { getProducts } from "../../services/bob";
import { BobObjectResponse } from "../../services/bob/types";
import { handlerFilteredByID } from "./helpers";

const Product = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<BobObjectResponse>();

  const handlerFiltersById = async () => {
    try {
      setLoading(true);
      const data = await getProducts();

      const filteredData = handlerFilteredByID(data, Number(id));

      setProducts(filteredData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handlerFiltersById();
  }, []);

  return (
    <div>
      <Header />
      <h2>Product</h2>
      {JSON.stringify(products)}
      <h2>{id}</h2>
      <Footer />
    </div>
  );
};

export default Product;
