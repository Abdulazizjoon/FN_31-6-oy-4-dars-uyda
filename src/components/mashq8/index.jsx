import React, { useState } from "react";
function Kalkulator() {
  let [son1, setSon1] = useState("");
  let [son2, setSon2] = useState("");
  let [data, setData] = useState([]);
  function res(e) {
    e.preventDefault();
      let sum = Number(son1) + Number(son2);
      console.log(sum);
      alert(sum)
  }
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="son kiriting"
          onChange={(e) => {
            setSon1(e.target.value);
          }}
          value={son1}
        />
        <input
          type="text"
          placeholder="son kiriting"
          onChange={(e) => {
            setSon2(e.target.value);
          }}
          value={son2}
        />
        <button onClick={res}>hisoblash</button>
      </form>
    </div>
  );
}
export default Kalkulator;
