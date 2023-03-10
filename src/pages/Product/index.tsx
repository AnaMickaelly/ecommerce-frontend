import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Banner } from "../../components/Banner";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { getProducts } from "../../services/bob";
import { BobObjectResponse, BobResponse } from "../../services/bob/types";
import { getFirstFourProducts, handlerFilteredByID } from "./helpers";
import "./styles.scss";
import { Cards } from "../../components/Cards";

const Product = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [accordionOne, setAccordionOne] = useState(true);
  const [accordionTwo, setAccordionTwo] = useState(false);
  const [product, setProduct] = useState<BobObjectResponse>();
  const [products, setProducts] = useState<BobResponse>();
  const [count, setCount] = useState(1);

  const handlerFiltersById = async () => {
    try {
      setLoading(true);
      const data = await getProducts();

      const filteredData = handlerFilteredByID(data, Number(id));
      const firstProducts = getFirstFourProducts(data);

      setProducts(firstProducts);
      setProduct(filteredData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSumPrice = () => {
    if (!product?.price) return;

    const value = product?.price * count;

    return value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  useEffect(() => {
    handlerFiltersById();
  }, []);

  return (
    <div>
      <Header />
      <Banner
        height={150}
        description={`Home - Blusas e Camisas - ${product?.name}`}
      />

      <div className="product-container">
        <div className="product-photo">
          <img src={product?.photo} alt="foto do produto" />
        </div>
        <div>
          <div className="product-info">
            <div className="product-principal-info">
              <h2>{product?.name}</h2>
              <h3>{handleSumPrice()}</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore in nihil dolor quidem ipsam possimus minima impedit
                eligendi repudiandae? Accusamus ad officiis, assumenda odio
                exercitationem aliquam corrupti quia quaerat saepe!
              </p>
            </div>
          </div>
          <div className="product-custom-sale">
            <div className="custom-colors">
              <p>Cores *</p>
              <div className="select-colors">
                <div className="color blue" />
                <div className="color red" />
                <div className="color purple" />
                <div className="color green" />
              </div>
            </div>
            <div className="custom-sizes">
              <p>Tamanhos</p>
              <div className="select-sizes">
                <Button width={16} height={16} opacity>
                  P
                </Button>
                <Button width={16} height={16} opacity>
                  M
                </Button>
                <Button width={16} height={16} opacity>
                  G
                </Button>
                <Button width={16} height={16} opacity>
                  XG
                </Button>
                <Button width={16} height={16} opacity>
                  XXG
                </Button>
              </div>
            </div>
            <div className="custom-sale">
              <div className="count-items">
                <p
                  onClick={() =>
                    count >= 2 && setCount((prevState) => prevState - 1)
                  }
                >
                  -
                </p>
                <p>{count}</p>
                <p onClick={() => setCount((prevState) => prevState + 1)}>+</p>
              </div>
              <Button uppercase>Comprar</Button>
            </div>
            <div className="product-details">
              <div className="accordion">
                <div
                  onClick={() => setAccordionOne(!accordionOne)}
                  className="title"
                >
                  <h3>Descrição</h3>
                  <p>{accordionOne ? "+" : "-"}</p>
                </div>
                {accordionOne ? (
                  <p className="content">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quod vitae omnis commodi doloremque eius distinctio,
                    praesentium nemo enim eaque, sunt expedita fuga, obcaecati
                    molestias quam! Impedit, iste. Sunt, minima fugit.
                  </p>
                ) : null}
              </div>
              <div className="accordion">
                <div
                  onClick={() => setAccordionTwo(!accordionTwo)}
                  className="title"
                >
                  <h3>Especificações</h3>
                  <p>{accordionTwo ? "+" : "-"}</p>
                </div>
                {accordionTwo ? (
                  <p className="content">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quod vitae omnis commodi doloremque eius distinctio,
                    praesentium nemo enim eaque, sunt expedita fuga, obcaecati
                    molestias quam! Impedit, iste. Sunt, minima fugit.
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-associated">
        <h2>Produtos Relacionados</h2>
        <div className="product-associated-items">
          {products?.map((product) => (
            <Cards
              image={product.photo}
              name={product.name}
              price={product.price}
              key={product.id}
              id={product.id}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
