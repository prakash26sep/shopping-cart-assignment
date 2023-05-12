import { Box, Tooltip } from "@mui/material";
import { truncate } from "../../utils/helpers";
import ButtonNormal from "../../core-components/Button";
import { addProductToCart } from "../../store/features/productSlice";
import { useAppDispatch } from "../../store/store";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./index.scss";

interface Props {
  id: string;
  imageURL: string;
  description: string;
  name: string;
  category: string;
  price: number;
  sku: string;
  stock: number;
}

/**
 * Product card component for product data
 */
function ProductCard({
  id,
  imageURL,
  description,
  name,
  category,
  price,
  sku,
  stock,
}: Props) {
  const dispatch = useAppDispatch();
  const { width } = useWindowDimensions();

  return (
    <Box key={sku} className={"main-product-card"}>
      <Box className="title-product" component={"h2"}>
        {name}
      </Box>
      <Box className="product-image-desc">
        <Box className="product-img-container" component={"figure"}>
          <img className="product-img" src={imageURL} alt={`${name} image`} />
        </Box>
        <Box className={"product-card-description"}>
          <Tooltip title={description}>
            <Box>{truncate(description, 55)}</Box>
          </Tooltip>
        </Box>
      </Box>
      <Box className={"product-action"}>
        <Box className={"price-product-separate"}>
          MRP Rs.{price ? price : "-"}
        </Box>

        <ButtonNormal
          style={width && width > 768 ? {} : { width: "100%" }}
          onClick={() => {
            dispatch(
              addProductToCart({
                id,
                imageURL,
                name,
                category,
                price,
              })
            );
          }}
          text={width && width > 768 ? "Buy Now" : `Buy Now @ Rs.${price}`}
          variant="contained"
          color="secondary"
        />
      </Box>
    </Box>
  );
}

export default ProductCard;
