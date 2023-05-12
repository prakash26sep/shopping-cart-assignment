import { Box } from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "./index.scss";
import {
  Cart,
  addProductToCart,
  removeProductFromCart,
} from "../../store/features/productSlice";
import { useAppDispatch } from "../../store/store";

/**
 * Cart Item component for showing each cart item
 */
function CartItem({ id, imageURL, name, category, price, quantity }: Cart) {
  const dispatch = useAppDispatch();

  return (
    <Box className={"cart-item-container"}>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ marginRight: "2%" }} component={"figure"}>
          <img
            className="cart-item-image"
            src={imageURL}
            alt={`${name} image`}
          />
        </Box>
        <Box className={"cart-item-info"}>
          <Box sx={{ fontWeight: 600 }} component={"h2"}>
            {name}
          </Box>
          <Box className={"quantity-container"}>
            <AddCircleRoundedIcon
              color="secondary"
              sx={{ marginRight: "3%", cursor: "pointer" }}
              onClick={() =>
                dispatch(
                  addProductToCart({
                    id,
                    imageURL,
                    name,
                    category,
                    price,
                  })
                )
              }
            />{" "}
            {quantity} <span style={{ marginRight: "3%" }} />
            <RemoveCircleRoundedIcon
              sx={{ marginRight: "3%", cursor: "pointer" }}
              onClick={() =>
                dispatch(
                  removeProductFromCart({
                    id,
                    imageURL,
                    name,
                    category,
                    price,
                  })
                )
              }
              color="secondary"
            />{" "}
            <CloseRoundedIcon sx={{ marginRight: "3%" }} /> Rs.{price}
          </Box>
        </Box>
      </Box>
      <Box className={"total-price-container"}>{price * quantity}</Box>
    </Box>
  );
}

export default CartItem;
