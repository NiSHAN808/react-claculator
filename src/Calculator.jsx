import './CalculatorStyle.css'
import { useState, useRef } from 'react';



function Calculator() {
  var first_number = useRef(undefined);
  let sign_positiin = useRef(0);
  let [input, setInput] = useState("");
  let [history, sethistory] = useState("");
  function handleBtnClick(index) {

    if (buttons[index] === "C") {
      
      setInput("");    // if we leave() without "" then the input type will be undefined so later we can't add value on it
      first_number.current = undefined;
      sign_positiin.current = 0;
      return;
    }
    if (buttons[index] === "<") {
      
      setInput(input.slice(0,input.length-1));  return;
    }
    if (typeof (buttons[index]) === "string") {

    
      if (first_number.current === undefined) {
        first_number.current = Number(input);
        sign_positiin.current = input.length;
        setInput(input + buttons[index] );

      } else {
          let x = operation(first_number.current,
          Number(input.slice(sign_positiin.current + 1, input.length)),
          input[sign_positiin.current])

          x = JSON.stringify(x);

        if (buttons[index] !== "=") {
         x = x + buttons[index];
          sign_positiin.current = x.length - 1;
          first_number.current = x;
        } else {
          first_number.current = undefined;
        }
        sethistory(input);
        
        setInput(x);
      }



    } else {

      setInput(input + buttons[index]);
    }
  }



  function operation(number1, number2, operator) {

    switch (operator) {
      case "+":
        return number1 + number2;
      case "-":
        return number1 - number2;
      case "X":
        return number1 * number2;
      case "/":
        return number1 / number2;
      case "%":
        return number1 % number2;

    }

  }

  let buttons = ["C", "<", "%", "/", 7, 8, 9, "X", 4, 5, 6, "-", 1, 2, 3, "+", "", 0, ".", "="];



  return (
    <>
    <div className="calcBox">
      <div className="outBox">
        <div className="historyBox">{history}</div>
        <div className="calculationBox">{input}</div>
          </div>
          <div className="buttonsOutBox">
        {buttons.map((button, index) =>
          <div className="btn" key={index}
            onClick={() => handleBtnClick(index)}>
            {button}
          </div>)}


      </div>
    </div>
    </>
  )

}
export default Calculator;