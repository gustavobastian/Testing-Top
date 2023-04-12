function reverseString(parameterString) { 
    if((isNaN(parameterString))==false){
        return "ERROR";
    };
    let output="";
    let stringSize=parameterString.length;
    for (let i=0;i<stringSize;i++){
        output+=parameterString[(stringSize)-1-i];
    }
    console.log(output);
    return output;
  }
module.exports = reverseString;