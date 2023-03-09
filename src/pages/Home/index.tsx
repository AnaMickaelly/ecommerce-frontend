import { NavLink } from "react-router-dom";
import Button from "../../components/Button";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <NavLink to="/product">Messages</NavLink>
      <Button>oi</Button>
    </div>
  );
};

export default Home;
