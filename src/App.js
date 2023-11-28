import {useEffect, useState} from "react";
import './App.css';

const App = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        // alert("Changed counter to:" + counter)
        setCounter(100);
    }, []);

    return (
        <div className="App">
            <br/>
            <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
            <h1>{counter}</h1>
            <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
        </div>
    );
}

export default App;
