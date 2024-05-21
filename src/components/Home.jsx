import { useState } from "react";
import AlphabetGrid from "./AlphabetGrid";
import OutputString from "./OutputString";

const Home = () => {
    const [outputString, setOutputString] = useState('');

    const handleTileClick = (letter) => {
        const newString = outputString + letter;
        const updatedString = replaceLetters(newString);
        setOutputString(updatedString);
    };
    const replaceLetters = (str) => {
        let result = '';
        for (let i = 0; i < str.length;) {
            let count = 1;
            while (i + count < str.length && str[i] === str[i + count]) count++;
            result += count >= 3 ? '_'.repeat(count) : str.slice(i, i + count);
            i += count;
        }
        return result;
    };
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Alphabet Tile</h1>
            <AlphabetGrid onTileClick={handleTileClick}></AlphabetGrid>
            <OutputString outputString={outputString}></OutputString>
        </div>
    );
};

export default Home;