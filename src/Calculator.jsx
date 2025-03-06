import './CalculatorStyle.css'
import { useState,useRef } from 'react';



function Calculator(){
var first_number = useRef(undefined);
let sign_positiin=useRef(0);
 let [input,setInput]=useState("");

   function handleBtnClick(index){
    
    if(typeof(buttons[index])==="string"){
      

        if(first_number.current === undefined){
          first_number.current=Number(input);
          
          sign_positiin.current=input.length+1;
          setInput( input + buttons[index]);
        
        }else{
         
           let x= first_number.current + Number(input.slice(sign_positiin.current,input.length));
           first_number.current=x;
          // console.log("x=",x,"    y=  ",y, "     i=", sign_positiin.current);
           setInput(x);
        }



    }else{
      
    setInput( input + buttons[index]);
    }
   }



 let buttons=["C","()","%","/",7,8,9,"X",4,5,6,"-",1,2,3,"+","+/-",0,".","="];



return(
    <>
    <div  className="outBox">{input}</div>
    <div className="buttonsOutBox">
         {buttons.map((button,index)=>
             <div className="btn" key={index} 
             onClick={()=>handleBtnClick(index)}>
                {button}
             </div>)}


    </div>

    </>
)

}
export default Calculator;