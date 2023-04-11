import { useState } from "react";

export function useCounter  () {
    const [quantity, setQuantity] = useState(0);
    const increment =() => setQuantity(quantity + 1)
    const decrement=() => setQuantity(quantity - 1)
    const reset=() => setQuantity(0)
 

    
return {quantity, increment, decrement, reset}
}