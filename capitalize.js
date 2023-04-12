function capitalize(parameterString) { 
    if((isNaN(parameterString))==false){
        return "ERROR";
    };
    let output=parameterString[0].toUpperCase();
    output=output+parameterString.slice(1)
    
    return output;
  }
module.exports = capitalize;