// basic operations

let a=8
let b=51
let c=2
a=(a^c)^(c)
b=b%4
console.log(a+b+c);

// Shift operations

console.log(a<<c);
console.log(a>>c);

//  Array operations 

arr=[10,20,30,40]
result=arr.length
console.log(result);

result2=arr.push(160,89)

console.log(arr);
result3=arr.pop()
console.log(arr);
result= arr.shift()
console.log(arr);

result4=arr.splice(41,0)
console.log(arr);

// 0   1  2  3  4   5
arr1=[12,34,45,415,676,78]
result= arr1.indexOf(415)
console.log('the result',result)
console.log('the arr is',arr1)