
import {useState} from "react";
function App() {
    const [selectedLetters, setSelectedLetters] = useState([]);
    const [outputString, setOutputString] = useState('');
    const letters = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K", "L","M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W","X", "Y", "Z"];
    const handleClick = (letter) => {
        const newSelectedLetters = [...selectedLetters];
        // Handle consecutive letter replacement with "_"
        if (newSelectedLetters.length > 1) {
            const lastThree = newSelectedLetters.slice(-3);

            console.log(lastThree.toString())
            console.log(letter.repeat(3))
            console.log(lastThree.join('') === letter.repeat(3))

            if (lastThree.join('') === letter.repeat(3)) {
                newSelectedLetters.pop();
                newSelectedLetters.pop();
                newSelectedLetters.pop();
                newSelectedLetters.push('_');
            }
        }
        // Update selected letters and output string
        newSelectedLetters.push(letter);
        setOutputString(newSelectedLetters.join(''));
        setSelectedLetters(newSelectedLetters);

    };
  return (
    <>
        <div className='container'>
            <textarea readOnly={true} className="display" id='outputString' value={outputString}>
            </textarea>
            <div className="grid-container">
                {letters.map((letter) => (
                    <div key={letter} className="tile" onClick={() => handleClick(letter)}>
                        {letter}
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default App
