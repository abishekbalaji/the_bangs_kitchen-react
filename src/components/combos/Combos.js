import React from "react";

import Combo from "./Combo";

const Combos = () => (
  <div id="combos" className="combos-div">
    <h1 className="combos__title">Combos</h1>
    <div className="combos__container">
      <Combo
        name="Combo 1"
        items={["1 PC CRISPY FRIED CHICKEN", "1 SHAWARMA ROLL", "1 DRINK"]}
      />
      <Combo
        name="Combo 2"
        items={["QUARTER CHICKEN GRILL", "1 SHAWARMA ROLL", "1 DRINK"]}
      />
      <Combo
        name="Combo 3"
        items={[
          "2 PC FRIED CHICKEN",
          "2 SHAWARMA ROLL",
          "QUARTER CHICKEN GRILL",
          "2 DRINKS",
        ]}
      />
      <Combo
        name="Combo 4"
        items={["1 PC FRIED CHICKEN", "1 PC CHICKEN FILLET BURGER", "1 DRINK"]}
      />
      <Combo
        name="Combo 5"
        items={["POPCORN", "1 PC CHICKEN FILLET BURGER", "1 DRINK"]}
      />
    </div>
  </div>
);

export default Combos;
