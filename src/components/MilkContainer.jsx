import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyMilk } from "../features/milk/milkSlice";

function MilkContainer() {
    const [value, setValue] = useState(0);
    
    const state = useSelector((state) => state.milk);
console.log(state);

  const dispatch = useDispatch();
  return (
    <div>
      <h2>Milk Number : {state.numOfMilk}</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(buyMilk(value))}>
        Buy Milk
      </button>
    </div>
  );
  }

export default MilkContainer