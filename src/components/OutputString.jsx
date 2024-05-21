const OutputString = ({ outputString }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold text-center">Output String</h2>
      <div id="outputString" className="text-2xl">
        {outputString}
      </div>
    </div>
  );
};

export default OutputString;
