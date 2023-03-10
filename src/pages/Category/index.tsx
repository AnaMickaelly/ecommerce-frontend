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
import empty from "../../assets/animations/empty.json";
import Lottie from "lottie-react";
import { Button } from "../../components/Button";
import { handlerFilterDataByGender } from "./helpers";
import { FiltersType } from "./types";

const Category = () => {
  const { type } = useParams<ParamsProps>();
  const [products, setProducts] = useState<BobResponse>();
  const [loading, setLoading] = useState(false);

  const emptyProduct = {
    height: "400px",
  };

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

  const handlerFiltersByType = async (type: string) => {
    try {
      setLoading(true);
      const data = await getProducts();

      const filteredData = handlerFilterDataByGender(data, type);

      setProducts(filteredData);
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
        <div className="container-filters">
          <div className="filter-by-category">
            <Button
              onClick={() => handlerFiltersByType(FiltersType.woman)}
              opacity
              uppercase
            >
              Feminino
            </Button>
            <Button
              onClick={() => handlerFiltersByType(FiltersType.man)}
              opacity
              uppercase
            >
              Masculino
            </Button>
            <Button
              onClick={() => handlerFiltersByType(FiltersType.acessories)}
              opacity
              uppercase
            >
              Acessórios
            </Button>
          </div>
          <div className="filter-views">
            <div className="view">
              <div className="view-items">
                <p>Ordenar:</p>
                <p className="item">Name</p>
              </div>
              <div className="view-items">
                <p>Visualizar:</p>
                <p className="item">
                  {products?.length ? products?.length : 0}
                </p>
              </div>
            </div>
          </div>
        </div>
        {loading ? <Lottie animationData={animation} /> : null}
        {!products?.length ? (
          <>
            <h3 className="empty-data">Não há dados para esse filtro.</h3>
            <Lottie style={emptyProduct} animationData={empty} />
          </>
        ) : null}
        <div className="products-items-cards">
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
