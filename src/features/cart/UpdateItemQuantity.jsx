import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseitemQuantity, increaseitemQuantity } from "./CartSlice";

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();

  function handleItemIncreamnet() {
    dispatch(increaseitemQuantity(pizzaId));
  }

  function handleItemDecreament() {
    dispatch(decreaseitemQuantity(pizzaId));
  }
  return (
    <div>
      <Button type="round" onClick={handleItemIncreamnet}>
        _
      </Button>
      <Button type="round" onClick={handleItemDecreament}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
