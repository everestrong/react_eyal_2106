import './App.css';
import {useState} from 'react'
import First from './First';
import Second from './Second';
const App = () => {

    const [count, setCount] = useState(0)
    // logic (js)

    const myStyle= {color:"red",backgroundColor:`rgb($${count}, 46, 135)`}
    // view (HTML)
    return (
        <h1 className="App">
            <header className="App-header">
                <button style={myStyle} onClick={()=>setCount(count+10)}>{count}</button>

                <First></First>
                <Second></Second>
            </header>

           
        </h1>
    );
}

export default App;
