import { useEffect } from "react";
import { useAppDispatch } from "../../store/store";
import { useAppSelector } from "../../store/store";
import { fetchBanners } from "../../store/features/bannerSlice";
import { fetchCategories } from "../../store/features/categorySlice";
import "./index.scss";
import ProductCart from "../../components/Cart";

function Cart() {
  const dispatch = useAppDispatch();
  const productsInCart = useAppSelector(
    (state) => state.product.productsInCart
  );

  useEffect(() => {
    dispatch(fetchBanners());
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="cart-page-container">
      <ProductCart productsInCart={productsInCart} />
    </div>
  );
}

export default Cart;
