ar=[3,2,5]
let res=1
for (var  i=0;i<ar.length;i++)
{
    res=res*ar[i]
}
console.log(res)
/*a=[3,4,5]
arr=[];
for(var i=0;i<a.length;i++)
{
    arr.push(a[i]*2)
}
                                                            
console.log(arr);
*/

let nums = [10,1,2,4,5,12, 20, 30, 40];
 
const ab=[]
for(let d of nums)
{
   if(d>=20)
   {
    ab.push(d)
   }
}
console.log(ab)


 //  Product of elements in array 
const abc=[]
for(let d of nums)
{
   if(d%2==0)
   {
    abc.push(d)
   }
}
console.log(abc)
//  sum of elements in array 
var s=0

for ( let k of nums)
{
    s=s+k
}
console.log(s)


let answer 

// 


let person1={
  name:"demo",
  dep:"IT"
}
console.log(person1)
console.log(person1.name)

let person= new Object()
person.name="demo"
person.gender="male"
console.log(person)
console.log(person.name)

function Person(name,gender){
 
    console.log("the val", this.name, name)
    this.name=name;
    this.gender=gender;
  
}

let p1= new Person("demo","male")
console.log(p1)