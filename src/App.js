import { useState } from 'react';
import './App.css';

const App = () => {
    const [display, setDisplay] = useState('0')

    const handleNumber = (event) => {
        const number = event.target.textContent;
        if (display === '0') {
            setDisplay(number);
        } else {
            setDisplay(display + number)
        }
    }

    const handleOperator = (event) => {
        const operator = event.target.textContent;
        setDisplay(display + ' ' + operator + ' ');
    }

    return (
        <div className='App'>
            <div className="calculator">
                <div id="display" className="row">{display}</div>
                <div id="clear" className="row">AC</div>
                <div id="seven" onClick={handleNumber}>7</div>
                <div id="eight" onClick={handleNumber}>8</div>
                <div id="nine" onClick={handleNumber}>9</div>
                <div id="multiply" onClick={handleOperator}>*</div>
                <div id="four" onClick={handleNumber}>4</div>
                <div id="five" onClick={handleNumber}>5</div>
                <div id="six" onClick={handleNumber}>6</div>
                <div id="divide" onClick={handleOperator}>/</div>
                <div id="one" onClick={handleNumber}>1</div>
                <div id="two" onClick={handleNumber}>2</div>
                <div id="three" onClick={handleNumber}>3</div>
                <div id="add" onClick={handleOperator}>+</div>
                <div id="zero" onClick={handleNumber}>0</div>
                <div id="decimal" >.</div>
                <div id="equals" > =</div>
                <div id="subtract" onClick={handleOperator}> -</div>
            </div>
        </div>
    )


}

export default App;
