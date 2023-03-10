import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { CategoryProducts } from "./components";
import { ParamsProps } from "./components/types";
import "./styles.scss";

const Category = () => {
  const { type } = useParams<ParamsProps>();

  return (
    <div>
      <Header />
      {type ? <CategoryProducts title={type} /> : null}
      <Footer />
    </div>
  );
};

export default Category;
