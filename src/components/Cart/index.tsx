import { Box } from "@mui/material";
import { MouseEventHandler } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import ButtonNormal from "../../core-components/Button";
import { Cart } from "../../store/features/productSlice";
import { useAppDispatch } from "../../store/store";
import CartItem from "../CartItem";

import "./index.scss";

interface Props {
  productsInCart: Cart[];
  handleClose?: MouseEventHandler<SVGSVGElement>;
}

/**
 * Main Cart component
 */
function ProductCart({ productsInCart, handleClose }: Props) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getTotalCartValue = () => {
    let price = 0;
    productsInCart.forEach((item) => {
      price += item.price * item.quantity;
    });
    return price;
  };

  const totalCartItems = () => {
    let quantity = 0;

    productsInCart.forEach((product) => {
      quantity += product.quantity;
    });
    return quantity;
  };

  return (
    <Box className={"main-product-cart"}>
      <Box className={"cart-title"}>
        <Box>My Cart ({totalCartItems()} item)</Box>
        {handleClose ? (
          <Box>
            <CloseIcon sx={{ cursor: "pointer" }} onClick={handleClose} />
          </Box>
        ) : (
          ""
        )}
      </Box>
      <Box className={"cart-item-list"}>
        {productsInCart && productsInCart.length ? (
          <Box>
            <Box>
              {productsInCart.map(
                ({
                  id,
                  imageURL,
                  description,
                  name,
                  category,
                  price,
                  quantity,
                }) => (
                  <CartItem
                    id={id}
                    imageURL={imageURL}
                    description={description}
                    name={name}
                    category={category}
                    price={price}
                    quantity={quantity}
                  />
                )
              )}
            </Box>
            <Box className={"cheap-prods"}>
              <img
                className="lowest-price-img"
                src={"static/images/lowest-price.png"}
                alt={"lowest price guarantee image"}
              />
              You won't find it cheaper anywhere
            </Box>
          </Box>
        ) : (
          <Box sx={{ height: "100%" }}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Box sx={{ marginBottom: "20px", fontWeight: 600 }}>
                No items in your cart
              </Box>
              <Box>Your favourite items are just a click away</Box>
            </Box>
          </Box>
        )}
      </Box>
      {productsInCart && productsInCart.length ? (
        <Box className={"checkout-box"}>
          <Box className={"promo-text"}>
            Promo code can be applied on payment page
          </Box>
          <Box className={"checkout-button-container"}>
            <ButtonNormal
              color="secondary"
              variant={"contained"}
              text={
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Box>Proceed to checkout</Box>
                  <Box>Rs.{getTotalCartValue()}</Box>
                </Box>
              }
            />
          </Box>
        </Box>
      ) : (
        <Box className={"start-shopping"}>
          <ButtonNormal
            color="secondary"
            variant={"contained"}
            text={"Start Shopping"}
            onClick={(event: any) => {
              navigate("/products");

              if (handleClose) {
                handleClose(event);
              }
            }}
          />
        </Box>
      )}
    </Box>
  );
}

export default ProductCart;
