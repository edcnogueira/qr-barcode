import React, { useState } from "react";
// import BarcodeScannerComponent from "react-qr-barcode-scanner"
import  LeitorDeCodigo  from "./components/leitorDeCodigo";

function App() {
  const [data, setData] = useState("Vazio")

  return (
    <div>
      <LeitorDeCodigo width="300"  height="300" onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData("Not Found");
        }}/>

        <p>{data}</p>
        <h1>teste3</h1>
    </div>
  )
}

export default App
