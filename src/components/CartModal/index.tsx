import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ProductCart from "../Cart";
import { useAppSelector } from "../../store/store";

const style = {
  position: "absolute" as "absolute",
  bottom: "0%",
  right: "5%",
  width: 400,
  bgcolor: "#cacaca",
  boxShadow: 24,
  height: "80vh",
};

interface Props {
  open: boolean;
  handleClose: any;
}

/**
 * Modal part component for the modal shown for cart for large devices
 */
export default function CartModal({ open, handleClose }: Props) {
  const { productsInCart } = useAppSelector((state) => state.product);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <ProductCart
          productsInCart={productsInCart}
          handleClose={handleClose}
        />
      </Box>
    </Modal>
  );
}
