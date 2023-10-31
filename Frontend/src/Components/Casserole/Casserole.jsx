import React from "react";
import "./Casserole.css";
const Casserole = ({ list = [], width = "", height = "" }) => {
  return (
    <section className="screen" style={{ width, height }}>
      <div className="roll">
        {list.map((el, i) => (
          <div key={i}>{el}</div>
        ))}
      </div>
    </section>
  );
};

export default Casserole;
