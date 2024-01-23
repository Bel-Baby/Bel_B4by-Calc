//let display= document.getElementById('display');
//let currentInput= '';
//let currentOperator= '';
//let preValue= 0;


/*function appendToDisplay(value){
    currentInput += value;
    display.innerText = currentInput;
} //Display buttons on click.*/

/*function clearDisplay(){
    currentInput= '';
    currentOperator= '';
    //preValue= 0;
    display.innerText= '0';
}*/

/*function clean(){
    
}*/

/*calculateResult=()=>{
    if(currentInput==='') return;
    let currentValue = parseFloat(currentInput);

    switch (currentOperator){
        case '+':
        preValue += currentValue;
        break;
        case '-':
        preValue -= currentValue;
        break;
        case '*':
        preValue *= currentValue;
        break;
        case '/':
        if(curentValue!==0){
            preValue/=currentValue;
        }else{
            alert('Error: Divusion By Zero');
            clearDisplay();
            return;
        }
        break;
    default:
        preValue = currentValue;
        break;
    }
    display.innerText=preValue;
    currentInput='';
    currentOperator='';
}

clearDisplay();*/

//Initializing variables to store the current display and result display state
let currentDisplay = "0"; //Current display content
let resultDisplay = false; //Flag to track if the result is displayed

//Function to append a value to the current display
function appendToDisplay(value){
    if(currentDisplay === "0" || resultDisplay){
      //If current display is "0" or the result is already displayed, replace it with the new value
      currentDisplay = value;
    }else{
      //Else, assign the new value to the current display
      currentDisplay += value;
    }
  
    //Reset result display flag to false, as the user entered a new value
    resultDisplay = false;
  
    //Update the calculator display to show the new content
    updateDisplay();
}

//Function to update the calculator display with the current content
function updateDisplay(){
    const displayElement = document.getElementById("display");
    displayElement.textContent = currentDisplay;
}

//Function to calculate and display the result
function calculateResult(){
    try{
      //Use the eval() function to evaluate the maths expression
      const result = eval(currentDisplay);
  
      //Append the result to the current display, preceded by an equal sign (=)
      currentDisplay += "\n=" + result.toString();
  
      //Update the calculator display with the result
      updateDisplay();
    }catch(error){
      //If there is any error in the expression (e.g., dividing by zero), display an error message
      currentDisplay += "\nError";
  
      //Update the calculator display to show the error message
      updateDisplay();
    }
  
    //Set result display flag to true to indicate that the result is displayed
    resultDisplay = true;
}

//Function to clear the last entry from the current display
function clearLastEntry(){
    //Remove the last character from the current display using the slice() method
    currentDisplay = currentDisplay.slice(0, -1);
  
    //If the current display becomes empty, set it back to "0"
    if(currentDisplay === " "){
      currentDisplay = "0";
    }
  
    //Update the calculator display to reflect the changes
    updateDisplay();
}

//Function to clear entire display
function clearDisplay(){
    currentDisplay = "0"; // Reset the current display to "0"
    resultDisplay = false; // Reset the result display flag to false
  
    //Update calculator display to show the cleared content
    updateDisplay();
}

