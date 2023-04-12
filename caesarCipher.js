function shiftletter(value,index){
    let out=1;    
    
    if(value>64 && value<91){
        if(index+value<91){
            return value+index;
        } 
        else{            
            return (value+index)-26;
        }   
    }
    else{
        if(value>96 && value<123){
            if(index+value<123){
                return value+index;
            } 
            else{
                return value+index-26;
            }   
        }
        else{
            return value;
        }
    }    
    
}

function caesarCipher(parameterString,shiftF) { 
    let output="";
    let stringSize=parameterString.length;
    

    for (let i=0;i<stringSize;i++){        
        let value=(parameterString.charCodeAt(i));        
        output+=String.fromCharCode(shiftletter(value,shiftF))
        
    }    
    return output;
  }
module.exports = caesarCipher;