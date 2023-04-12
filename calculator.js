const calculator = function() { 
    
    function add(x,y){
        return x+y;
    }
    function substract(x,y){
        return x-y;
    }
    function divide(x,y){
        if(y==0){
            return "ERROR"
        }
        else{
            return (x/y);             
        }        
    }
    function multiply(x,y){        
        return x*y;
    }

    return {
        add,
        substract,
        divide,
        multiply
    };
  }
module.exports = calculator;