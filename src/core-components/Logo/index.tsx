import { Link } from "react-router-dom";
import "./index.scss";

function ProductCard() {
  return (
    <Link to="/">
      <img
        className="img"
        src={"static/images/logo.png"}
        alt="Sabka bazar logo"
      />
    </Link>
  );
}

export default ProductCard;
