const PutLine = ({ value, setValue, devise }) => {
  return (
    <div className="flex gap-6 justify-center items-center w-full">
      <input
        type="text"
        value={value}
        className="rounded-lg bg-gray-200 p-6 w-1/2 text-4xl box-border"
        onChange={(e) => setValue(e.target.value)}
      />
      <span className="text-4xl">{devise}</span>
    </div>
  );
};

export default PutLine;
