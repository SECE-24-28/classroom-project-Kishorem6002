import { useEffect, useState } from "react"
 

const Display4=()=>{
    const[student,setStudent]=useState({
        name:"Kishore",
        gender:"male",
        mobile:9344834407
    })
     
    function updateName(){
        setStudent( {name:"demo"})
           
         
    }
    return(
 <>
     
 <h1>name:{student.name}</h1>
 <h1>gender:{student.gender}</h1>
 <h1>mobile:{student.mobile}</h1>
 <button onClick={updateName}>change name</button>
 </>
    )
       
     
}
export default Display4