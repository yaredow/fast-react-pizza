import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseitemQuantity, increaseitemQuantity } from "./CartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseitemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className=" pt-2.5 text-sm font-semibold">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseitemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
