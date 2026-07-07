import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/productsSlice";
import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

const DeleteModal = ({ open, onClose, productId }) => {
  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch(deleteProduct(productId));
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle
        color="primary"
        fontWeight="bold"
      >
        Are you sure you want to delete this product?
      </DialogTitle>
      <DialogActions sx={{ justifyContent: "center", pb: 3, gap: 2 }}>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{ bgcolor: "grey.400", color: "black" }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleConfirm}
          variant="contained"
          color="error"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteModal;
