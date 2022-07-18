// 4. Coding exercise: You are tasked to write a checker that validates the parentheses of a LISP code. Write
//  a program (in Java or JavaScript) which takes in a string as an input and returns true if all the
//  parentheses in the string are properly closed and nested.

function checkParen(sample){
    let balancedCount = 0;
    if (sample[0] == ")" || sample[sample.length] == "(") { return false; } 
        else {
        //console.log("******")
        for (let i=0; i < sample.length; i++){
            if (sample[i] == "(") { balancedCount++; } 
                else if (sample[i] == ")") { balancedCount--; }
        }
        console.log(balancedCount)
        if (balancedCount == 0) {return true}
            else{return false}
        }
    }

let str = "()((()()";
console.log(checkParen(str));