let arr=[10,20,30,40,50]
// using for loop 
for(let a in arr)
console.log(a)

// Methods
// syntax 
// function function_name() - - -- - > function-    keyword

function display() 
{
    console.log("Hi");
}


display() // function call

function add(a,b)
{
    console.log(a+b);
}



function add(a,b)  // with aruguements
{
    let c
    c = a + b;
    console.log(c);
    return c;
}

add(10,50) 
console.log(add(45,50)) // return value  

// arrow  funtion 
let a=()=>{console.log("Hi")}

a()
console.log("Finish")

let summa=(a,b)=>{

    let c= a+b
    console.log(c)
}
summa(10, 20)

// function expression

let sub = function(a,b){
    let c = a - b
    console.log(c)
    return c
}
sub(50,20)

console.log(sub(100,50))

