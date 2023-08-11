import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./CartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  function handleItemDelete() {
    dispatch(deleteItem(pizzaId));
  }
  return (
    <Button type="small" onClick={handleItemDelete}>
      Delete
    </Button>
  );
}

export default DeleteItem;
