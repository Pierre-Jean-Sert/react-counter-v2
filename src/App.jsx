/*

* React Counter v2

*/

//! Import du style
import "./App.css";

//! Import des composants
import Header from "./components/Header";
import Footer from "./components/Footer";
import Counter from "./components/Counter";

//! Import des hooks
import { useState } from "react";

//* Fonction App
function App() {
  //
  //State de gestion des components
  const [counters, setCounters] = useState([1, 2]);

  //* Fonction add-counter
  const addCounter = () => {
    //On déploie un nouveau compteur et on l'initialise à 0
    const newTab = [...counters];
    newTab.push(0);
    setCounters(newTab);
  };

  return (
    <>
      {/* Header */}
      <Header></Header>

      <div className="container">
        <button className="add-counter" onClick={addCounter}>
          Add counter
        </button>
      </div>

      {/* Affichage des counters */}
      {counters.map((elem) => (
        <Counter key={elem} counter={elem} setCounter={setCounters} />
      ))}

      <Footer></Footer>
    </>
  );
}

export default App;
