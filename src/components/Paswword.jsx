import { useState } from "react"

export const Password=()=>{
const [password,setPassword]=useState();
const[repassword,setRepassword]=useState();
const[status,setStatus]=useState();


 const clickHandler = ()=>{
     password === repassword ? setStatus("Matched") : setStatus("TryAgain");

console.log("clicked")
    }
    
    return(
        <>
<h1>Login Form</h1>
<br/>
<input type="text" placeholder="Enter Email"></input>
<br/>
< input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>

<br/>
<input type="password" placeholder="Re Password" onChange={(e)=>setRepassword(e.target.value)}/>
<div>
<button onClick={clickHandler}>submit</button>
<h1>{status}</h1>
</div>
</>
    )
}