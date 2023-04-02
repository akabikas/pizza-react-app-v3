import React from 'react'
 

export default function OrderPage() {
  const hStyle = { color: 'white'};
  return (
    <>
    <div>
      <h1 style={hStyle}>Order Page</h1>
      <h2 style={hStyle}>Please input your details and ingredients 
      you would like on your Pizza!</h2>
      
    </div>
    

    <Details/>
    </>
    
  )
  
}
