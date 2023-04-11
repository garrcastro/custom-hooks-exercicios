
import { Item } from "./Item";
import { useCounter } from "../hooks/useCounter";

export const Cart = () => {
  const quantity = useCounter(0)

  return (
    <div>
      <h1>Meu carrinho</h1>
      <Item
        label="My produto massa"
        quantity={quantity.quantity}
        onIncrement={quantity.increment}
        onDecrement={quantity.decrement}
        onReset={quantity.reset}
      />
    </div>
  );
};
