import rates from "../assets/rates.json";

const PutLine = ({
  value,
  setValue,
  devise,
  selectedCurrency,
  setSelectedCurrency,
}) => {
  return (
    <div className="flex gap-6 justify-center items-center w-full">
      <input
        type="text"
        value={value}
        className="text-2xl rounded-lg bg-gray-200 p-6 w-1/2 sm:text-4xl box-border"
        onChange={(e) => setValue(e.target.value)}
      />
      <span className="text-4xl">{devise}</span>
      <select
        value={selectedCurrency}
        onChange={(e) => {
          setSelectedCurrency(e.target.value);
        }}
        className=" text-2xl rounded-md bg-gray-100 py-2 pl-3 pr-2 sm:text-4xl"
      >
        {Object.keys(rates).map((rate, index) => (
          <option key={index} value={rate}>
            {rate}
          </option>
        ))}
        {/* Ajoutez d'autres options ici */}
      </select>
    </div>
  );
};

export default PutLine;
