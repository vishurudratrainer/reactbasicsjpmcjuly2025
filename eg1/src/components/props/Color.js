import { useState } from "react";
import ColorText from "./ColorText";

export default function Color() {
  const [color, setColor] = useState("");
  const captureColor =e =>setColor(e.target.value)
  return (
    <div>
      <label>
        Select color
        <select onChange={captureColor}>
          <option>Select color</option>
          <option value={"red"}>Red</option>
          <option value={"green"}>Green</option>
          <option value={"blue"}>Blue</option>
        </select>
      </label>
      <ColorText color={color}/>
    </div>
  );
}
