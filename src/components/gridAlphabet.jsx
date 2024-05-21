
const gridAlphabet = ({ onTileClick }) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return (
        <div className="grid grid-cols-6 gap-2 p-4">
            {alphabet.map((letter) => (
                <button
                    key={letter}
                    className="btn btn-primary"
                    onClick={() => onTileClick(letter)}
                >
                    {letter}
                </button>
            ))}
        </div>
    );
};

export default gridAlphabet;