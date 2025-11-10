import React, { useMemo, useState } from "react";
import Child from "./Child";

const Memo = () => {
  console.log("Parent");

  const [number, setNumber] = useState(0);
  const [name, setName] = useState([]);

  let data = useMemo(
    () => ({
      name: "Rameem",
      age: 21,
    }),
    [number]
  );
  return (
    <div>
      {/* {name} */}
      <br />
      <input
        style={{ border: "1px solid red" }}
        type="text"
        onChange={(e) => setName([...name, e.target.value])}
        name=""
        id=""
      />
      <button onClick={() => setNumber((n) => n + 1)}>{number}</button>
      <Child name={data} />
    </div>
  );
};

export default Memo;
