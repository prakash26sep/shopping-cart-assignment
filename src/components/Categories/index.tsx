import { Link } from "react-router-dom";
import ButtonNormal from "../../core-components/Button";
import "./index.scss";

interface Props {
  imgURL: string;
  title: string;
  description: string;
  buttonText: string;
  id: string;
}

/**
 * Category components for rendering categories on home
 */
function Category({ imgURL, title, description, buttonText, id }: Props) {
  return (
    <div className="banner-container">
      <div className="left-container">
        <img src={imgURL} alt={`${title} image`} />
      </div>

      <div className="right-container">
        <h1>{title}</h1>
        <p className="category-description">{description}</p>
        <Link to={`/products/${id}`}>
          <ButtonNormal
            text={buttonText}
            variant="contained"
            color={"secondary"}
          />
        </Link>
      </div>
    </div>
  );
}
export default Category;
