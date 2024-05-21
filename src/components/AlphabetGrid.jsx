const AlphabetGrid = ({ onTileClick }) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return (
        <div className="grid grid-cols-6 gap-2 p-4">
            {alphabet.map((letter) => (
                <button  className="btn bg-green-400"
                    key={letter}
                    onClick={() => onTileClick(letter)}
                >
                    {letter}
                </button>
            ))}
        </div>
    );
};

export default AlphabetGrid;
