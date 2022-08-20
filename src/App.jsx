import React, { useState } from "react";
// import BarcodeScannerComponent from "react-qr-barcode-scanner"
import { LeitorDeCodigo } from "./components/leitorDeCodigo";

function App() {
  const [data, setData] = useState("Vazio")

  return (
    <div>
      <LeitorDeCodigo />

        <p>{data}</p>
        <h1>teste2</h1>
    </div>
  )
}

export default App
