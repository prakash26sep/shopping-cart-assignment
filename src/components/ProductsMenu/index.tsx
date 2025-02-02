import Box from "@mui/material/Box";
import "./index.scss";
import { Category } from "../../store/features/categorySlice";
import { Link } from "react-router-dom";

interface Props {
  categories: Category[];
}

/**
 * Products menu
 */
function ProductsMenu({ categories }: Props) {
  return (
    <Box component={"section"} className="main-menu">
      <ul>
        {categories && categories.length ? (
          categories.map((category) => (
            <Link key={category.key} to={`/products/${category.id}`}>
              <li>{category.name}</li>
            </Link>
          ))
        ) : (
          <Box
            sx={{ padding: "1em", display: "flex", justifyContent: "center" }}
          >
            No Product found
          </Box>
        )}
      </ul>
    </Box>
  );
}

export default ProductsMenu;
