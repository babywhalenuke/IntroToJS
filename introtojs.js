    function myFunction(a,b){
        return a * b;
    }
    
    function functionOne(){
        document.write("Introduction to Javascript");
    }
    
    function writeS(){
    document.write("What the heck");
    }
    
    function fizzBuzz(){
        var i = 1;
        while(i <= 100){
            if(i%5 == 0 && i%3==0){
                console.log("fizzbuzz");
                i++;
            }
            else if(i%3 == 0 ){
                console.log("fizz");
                i++;
            }
            else if(i%5 == 0){
                console.log("buzz");
                i++;
            }
          
            else{
                console.log(i);
                i++;
            }
        }
    }
    
    function findBs(str){
        var i = 0;
        var bCount = 0;
        while(i<str.length){
            if(str.charAt(i) == 'B'){
                bCount++;
                i++;
            }
            i++;
        }
        return bCount;
    }


    