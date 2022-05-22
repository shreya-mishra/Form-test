import React from 'react'

const Form = () => {
  return (
    <main style={{display:'flex' , justifyContent:'space-around',flexDirection:'column',margin:20,width:'50%'}}>     
        <input placeholder='type your email' />
        <div style={{marginTop:20}}></div>
        <input placeholder='type your phone number' />
        <div style={{marginTop:20}}></div>
        <button onClick={() => console.log("submit")}>Submit</button>
    </main>
  )
}

export default Form