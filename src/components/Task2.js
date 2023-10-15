import "../../src/App.css"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';
export function Task2() {
    const [value,setValue]=useState("");
    const handleClick=(e)=>{
        setValue(value + e.target.value);
    }
    return(
        <div class="main">
        <div className="container">
            <form>
                <input type="text" value={value}/>
            </form>
            <div className="keypad">
                <button onClick={e=>setValue('')} id="backspace">AC</button>
                <button value="7" onClick={handleClick}>7</button>
                <button value="8" onClick={handleClick}>8</button>
                <button value="9" onClick={handleClick}>9</button>
                <button value="/" onClick={handleClick} id="i1">&divide;</button>
                <button value="4" onClick={handleClick}>4</button>
                <button value="5" onClick={handleClick}>5</button>
                <button value="6" onClick={handleClick}>6</button>
                <button value="*" onClick={handleClick} id="i1">&times;</button>
                <button value="1" onClick={handleClick}>1</button>
                <button value="2" onClick={handleClick}>2</button>
                <button value="3" onClick={handleClick}>3</button>
                <button value="-" onClick={handleClick} id="i1">&ndash;</button>
                <button value="0" onClick={handleClick}>0</button>
                <button value="." onClick={handleClick}>.</button>
                <button onClick={e=>setValue(eval(value))}>=</button>
                <button value="+" onClick={handleClick} id="i1">+</button>
                
            </div>
        </div>
        </div>
    )
}