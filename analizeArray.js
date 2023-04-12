const analizeArray = function (arrayP) { 
     let average;
     let min;
     let max;
     let length;

    if(arrayP.length==0){
        average=0;
        min=0;
        max=0;
        length=0;
    }else{
        let localaverage=0;
        length=0;
        max=Number.MIN_SAFE_INTEGER;
        min=Number.MAX_SAFE_INTEGER;
        arrayP.forEach(element => {
            if(element<min){min=element;}
            if(element>max){max=element;}
            length++;
            localaverage+=element;
        });    
        average=localaverage/length;
    }

    return {
        "average":average,
        "min":min,
        "max":max,
        "length":length,
    };
}
module.exports = analizeArray;
