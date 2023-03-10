import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cards } from "../../components/Cards";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { getProducts } from "../../services/bob";
import { BobResponse } from "../../services/bob/types";
import { CategoryProducts } from "./components";
import { ParamsProps } from "./components/types";
import "./styles.scss";
import animation from "../../assets/animations/loading.json";
import Lottie from "lottie-react";

const Category = () => {
  const { type } = useParams<ParamsProps>();
  const [products, setProducts] = useState<BobResponse>();
  const [loading, setLoading] = useState(false);

  const handleDataProducts = async () => {
    try {
      setLoading(true);
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleDataProducts();
  }, []);

  return (
    <div>
      <Header />
      {type ? <CategoryProducts title={type} /> : null}
      <div className="wrapper-card-itens">
        <div className="products-items-cards">
          {loading ? <Lottie animationData={animation} /> : null}
          {products?.map((product) => (
            <Cards
              image={product.photo}
              name={product.name}
              price={product.price}
              key={product.id}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Category;
