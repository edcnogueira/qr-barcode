import { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner"

function App() {
  const [data, setData] = useState("Vazio")

  return (
    <div>
      <BarcodeScannerComponent width={500} height={500} onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData("Not Found");
        }}/>

        <p>{data}</p>
    </div>
  )
}

export default App
