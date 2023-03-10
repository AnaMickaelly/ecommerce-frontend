import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { getProducts } from "../../services/bob";
import { BobObjectResponse } from "../../services/bob/types";
import { handlerFilteredByID } from "./helpers";

const Product = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<BobObjectResponse>();

  const handlerFiltersById = async () => {
    try {
      setLoading(true);
      const data = await getProducts();

      const filteredData = handlerFilteredByID(data, Number(id));

      setProduct(filteredData);
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
      <Banner
        height={150}
        description={`Home - Blusas e Camisas - ${product?.name}`}
      />
      {JSON.stringify(product)}
      <h2>{id}</h2>
      <Footer />
    </div>
  );
};

export default Product;
