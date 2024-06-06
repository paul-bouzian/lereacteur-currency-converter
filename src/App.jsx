import { useState } from "react";
import "./App.css";
import rates from "./assets/rates.json";
import Header from "./components/Header";
import PutLine from "./components/PutLine";

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [outputValue, setOutputValue] = useState(0);

  const calculate = () => {
    const rate = rates.USD;

    setOutputValue((inputValue * rate).toFixed(2));
  };

  return (
    <>
      <main className="flex flex-col items-center py-4 ">
        <Header />
        <PutLine value={inputValue} setValue={setInputValue} devise={"€"} />
        <button className="text-8xl py-10" onClick={calculate}>
          ⬇️
        </button>
        <PutLine value={outputValue} setValue={setOutputValue} devise={"$"} />
      </main>
    </>
  );
}

export default App;
