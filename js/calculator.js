let calculatorOn = true;

    function appendNumber(number){
      if(calculatorOn){
        document.getElementById('result').value += number;
      }
    }
    function appendOparator(operator){
      if(calculatorOn){
        document.getElementById('result').value += operator;
      }
    }
    function calculate(){
      if(calculatorOn){
        let expression = document.getElementById('result').value;
        let result = eval(expression);
        document.getElementById('result').value = result;
      }
    }
    function resultclear(){
      if(calculatorOn){
        document.getElementById('result').value = '';
      }
    }
    function onCalculator(){
      calculatorOn = true;
      document.getElementById('result').value = '';
      document.getElementById('onButton').disabled = true;
      document.getElementById('offButton').disabled = false;

    }
    function offCalculator(){
      calculatorOn = false;
      document.getElementById('result').value = '';
      document.getElementById('onButton').disabled = false;
      document.getElementById('offButton').disabled = true;

    }