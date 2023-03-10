import { Header } from "../../components/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./styles.scss";

import image01 from "../../assets/images/slides/slide01.jpg";
import image02 from "../../assets/images/slides/slide02.jpg";
import image03 from "../../assets/images/slides/slide03.jpg";
import trends01 from "../../assets/images/home/tendencies01.jpg";
import trends02 from "../../assets/images/home/tendencies03.jpg";
import trends03 from "../../assets/images/home/tendencies02.jpg";
import { Cards } from "../../components/Cards";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BobResponse } from "../../services/bob/types";
import { getProducts } from "../../services/bob";
import data from "../../mock/data.json";
import { Footer } from "../../components/Footer";

export const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<BobResponse>(data);

  const handleDataProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    handleDataProducts();
  }, []);

  return (
    <div>
      <Header />
      <div className="carousel-container-wapper">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          <div>
            <img src={image01} />
            <p onClick={() => navigate("/category")} className="legend">
              Shop now
            </p>
          </div>
          <div>
            <img src={image02} />
            <p onClick={() => navigate("/category")} className="legend">
              Shop now
            </p>
          </div>
          <div>
            <img src={image03} />
            <p onClick={() => navigate("/category")} className="legend">
              Shop now
            </p>
          </div>
        </Carousel>
      </div>
      <div className="trends-wrapper">
        <h2>Tendências</h2>
        <div className="trends-images">
          <div className="trends-images-right">
            <img className="trends-images-small" src={trends01} />
            <img className="trends-images-small" src={trends02} />
          </div>
          <img className="trends-images-big" src={trends03} />
        </div>
      </div>
      <div className="popular-wrapper">
        <h2>Populares</h2>
        <div className="products-items">
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
      <div className="button-wrapper">
        <Button width={180} uppercase onClick={() => navigate("/category")}>
          Ver mais produtos
        </Button>
      </div>
      <Footer />
    </div>
  );
};
