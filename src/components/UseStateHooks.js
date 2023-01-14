import React, { useState } from "react";

const UseStateHooks = () => {
  // normal-way
  let [count, setCount] = useState(0);
  let [name, setName] = useState("");

  let handleCountBtn = () => {
    count++;
    setCount(count++);
  };

  // object-way-for-multiple
  const [info, setInfo] = useState({
    count: 0,
    name: "",
    email: "",
  });

  return (
    <div style={{ padding: "10px 30px" }}>
      <h2>How to use useState Hook</h2>
      <div className="normal-way">
        <h5>Normal Way</h5>
        <h1>{count}</h1>
        <button onClick={handleCountBtn}>Click</button>
        <br />
        <br />
        <p>Example name : {name}</p>
        <input onChange={(e) => setName(e.target.value)} placeholder="Example name" />
      </div>

      <br />
      <br />

      <div className="object-way-for-multiple">
        <h5>Object Way for Multiple</h5>
        <h1>{info.count}</h1>
        <button onClick={handleCountBtn}>Click</button>
        <br />
        <br />
        <p>Example name : {info.name}</p>
        <input onChange={(e) => setInfo({ ...info, name: name })} placeholder="Example name" />
        <p>Example email : {info.email}</p>
        <input onChange={(e) => setName(e.target.value)} placeholder="Example email" />
      </div>
    </div>
  );
};

export default UseStateHooks;
