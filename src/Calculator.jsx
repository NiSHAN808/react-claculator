import './CalculatorStyle.css'
import { useState, useRef } from 'react';



function Calculator() {
  var first_number = useRef(undefined);
  let sign_positiin = useRef(0);
  let [input, setInput] = useState("");

  function handleBtnClick(index) {

    if (typeof (buttons[index]) === "string") {

   console.log("input is string")
      if (first_number.current === undefined) {
        first_number.current = Number(input);

        sign_positiin.current = input.length;
        setInput(input + buttons[index]);

      } else {


        let x = operation(first_number.current,
          Number(input.slice(sign_positiin.current+1, input.length)),
          input[sign_positiin.current])
        first_number.current = x;

        setInput(JSON.stringify(x));
      }



    } else {

      setInput(input + buttons[index]);
    }
  }



  function operation(number1, number2, operator) {
    console.log(operator)
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

  let buttons = ["C", "()", "%", "/", 7, 8, 9, "X", 4, 5, 6, "-", 1, 2, 3, "+", "+/-", 0, ".", "="];



  return (
    <>
      <div className="outBox">{input}</div>
      <div className="buttonsOutBox">
        {buttons.map((button, index) =>
          <div className="btn" key={index}
            onClick={() => handleBtnClick(index)}>
            {button}
          </div>)}


      </div>

    </>
  )

}
export default Calculator;