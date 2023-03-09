import { Header } from "../../components/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./styles.scss";

import image01 from "../../assets/images/slides/slide01.jpg";
import image02 from "../../assets/images/slides/slide02.jpg";
import image03 from "../../assets/images/slides/slide03.jpg";

export const Home = () => {
  return (
    <div>
      <Header />
      <div className="carousel-container-wapper">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          <div>
            <img src={image01} />
            <p className="legend">Shop now</p>
          </div>
          <div>
            <img src={image02} />
            <p className="legend">Shop now</p>
          </div>
          <div>
            <img src={image03} />
            <p className="legend">Shop now</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
