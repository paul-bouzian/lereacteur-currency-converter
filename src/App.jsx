import { useState } from "react";
import "./App.css";
import rates from "./assets/rates.json";
import Header from "./components/Header";
import PutLine from "./components/PutLine";

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [outputValue, setOutputValue] = useState(0);
  const [selectedInputCurrency, setSelectedInputCurrency] = useState("EUR");
  const [selectedOutputCurrency, setSelectedOutputCurrency] = useState("USD");

  const calculate = (type) => {
    if (type === "down") {
      setOutputValue(
        (
          (inputValue / rates[selectedInputCurrency]) *
          rates[selectedOutputCurrency]
        ).toFixed(2)
      );
      return;
    } else if (type === "up") {
      setInputValue(
        (
          (outputValue / rates[selectedOutputCurrency]) *
          rates[selectedInputCurrency]
        ).toFixed(2)
      );
    }
  };

  return (
    <>
      <main className="flex flex-col items-center py-4 ">
        <Header />
        <PutLine
          value={inputValue}
          setValue={setInputValue}
          devise={"€"}
          selectedCurrency={selectedInputCurrency}
          setSelectedCurrency={setSelectedInputCurrency}
        />

        <div className="flex gap-8">
          <button
            className="text-8xl py-10"
            onClick={() => {
              calculate("down");
            }}
          >
            ⬇️
          </button>
          <button
            className="text-8xl py-10"
            onClick={() => {
              calculate("up");
            }}
          >
            ⬆️
          </button>
        </div>

        <PutLine
          value={outputValue}
          setValue={setOutputValue}
          devise={"$"}
          selectedCurrency={selectedOutputCurrency}
          setSelectedCurrency={setSelectedOutputCurrency}
        />

        <button
          className=" p-4 bg-red-600 rounded-lg text-white mt-12 w-1/3 text-xl hover:bg-red-400"
          onClick={() => {
            setInputValue(0);
            setOutputValue(0);
          }}
        >
          Reset
        </button>
      </main>
    </>
  );
}

export default App;
