/*

* Counter component

*/

//! Import des hooks
import { useState } from "react";

//* Fonction Counter
function Counter(props) {
  //Récupération de counter
  const { counter, setCounter } = props;

  let number = counter;

  return (
    <>
      <section className="bloc1">
        <div>
          {/* //Condition pour afficher le counter à 0 */}
          {counter !== 0 && (
            <button className="sign" onClick={() => {}}>
              -
            </button>
          )}
        </div>
        <div className="central-bloc">
          <div>
            <p className="counter">{counter}</p>
          </div>

          <div>
            <button className="reset" onClick={() => {}}>
              Reset
            </button>
          </div>
        </div>
        <div>
          <button className="sign" onClick={() => {}}>
            +
          </button>
        </div>
      </section>

      <section>
        <div className="bloc2"> </div>
      </section>
    </>
  );
}

export default Counter;
