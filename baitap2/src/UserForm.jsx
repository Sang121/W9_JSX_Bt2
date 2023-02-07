
import React from "react";
function  UserForm({name,setName} ) {
  const inputName =(e)=>{
    setName(e.target.value)
  };
  return (
    <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={inputName()}  placeholder='Input your name'/>
    </div>
  )
}

export default UserForm
