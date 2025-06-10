import { useContext } from "react";
import { ValutaContext, IznosContext } from "../App";
import { VALUTE } from "../Utils/ValutaUtils";

const PayPal = () => {
  const valuta = useContext(ValutaContext);
  const iznos = useContext(IznosContext);



  return (
    <>
      <p>
        {valuta.novaValuta}, {iznos.noviIznos} = {iznos.noviIznos * VALUTE[valuta.novaValuta]} BAM
      </p>
    </>
  );
};

export default PayPal;
