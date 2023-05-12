import Box from "@mui/material/Box";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Logo from "../../core-components/Logo";
import "./index.scss";
import { useAppSelector } from "../../store/store";
import CartModal from "../CartModal";
import useWindowDimensions from "../../hooks/useWindowDimensions";

/**
 * Header component for Carousel
 */
function HeaderMain() {
  const { productsInCart } = useAppSelector((state) => state.product);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  const totalCartItems = () => {
    let quantity = 0;

    productsInCart.forEach((product) => {
      quantity += product.quantity;
    });
    return quantity;
  };

  return (
    <Box component={"header"} className="main-header">
      <Box className="inner-header">
        <Box className="left-header">
          <Logo />
          <Box component={"nav"}>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
          </Box>
        </Box>
        <Box className="right-header">
          <Box component={"nav"}>
            <Link to="/sign-in">Sign in</Link>
            <Link to="/register">Register</Link>
          </Box>
          <Box
            component={"button"}
            onClick={() => {
              if (width && width > 992) {
                handleOpen();
              } else {
                navigate("/cart");
              }
            }}
            className={"cart-info-box"}
          >
            <ShoppingCartIcon color="secondary" className="cart-icon" />{" "}
            {totalCartItems()} items
          </Box>
        </Box>
      </Box>
      <CartModal open={open} handleClose={handleClose} />
    </Box>
  );
}

export default HeaderMain;
