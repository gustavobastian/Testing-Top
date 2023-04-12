const calculator = function() { 
    
    function add(x,y){
        return x+y;
    }
    function substract(x,y){
        return x-y;
    }

    return {
        add,
        substract

    };
  }
module.exports = calculator;