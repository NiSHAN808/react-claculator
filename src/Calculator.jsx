import './CalculatorStyle.css'




function Calculator(e){
   function handleBtnClick(index){
    console.log(buttons[index])
  
   }
 let buttons=["C","()","%","/","7","8","9","X","4","5","6","-","1","2","3","+","+/-","0",".","="];



return(
    <>
    <div className="outBox"></div>
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