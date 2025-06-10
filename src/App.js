import { createContext, useState, useEffect } from "react";
import { VALUTE } from "./Utils/ValutaUtils";
import PayPal from "./Components/PayPal";

export const ValutaContext = createContext("USD");
export const IznosContext = createContext("0");

const App = () => {
  const [novaValuta, setNovaValuta] = useState("USD");
  const [noviIznos, setNoviIznos] = useState("0");


  const PromjeniValutu = (valute) => {
    console.log("Nova valuta:", valute);
    setNovaValuta(valute);
  };

  const PromjeniIznos = (iznosi) => {
    console.log("Novi iznos:", iznosi);
    setNoviIznos(iznosi);
  };

  return (
    <>
      <ValutaContext.Provider value={{ novaValuta, PromjeniValutu }}>
        <IznosContext.Provider value={{ noviIznos, PromjeniIznos }}>
          <PayPal />
        </IznosContext.Provider>
      </ValutaContext.Provider>

      <input onInput={(e) => PromjeniIznos(e.target.value)} />
      <select onChange={(e) => PromjeniValutu(e.target.value)}>
        {Object.keys(VALUTE).map((valute) => (
          <option key={valute} value={valute}>{valute}</option>
        ))}
      </select>
    </>
  );
};

export default App;