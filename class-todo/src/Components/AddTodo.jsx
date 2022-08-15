import React, { useState } from 'react'

export const AddTodo = ({onAdd}) => {
    const[newTodo,setNewTodo]=useState('');

    
  return (
    <div>
        <input type="text" placeholder='Add Something' value={newTodo}
          onChange={(e)=>setNewTodo(e.target.value)} />
        <button onClick={()=>{
            let value= newTodo.trim();
            if(value){
                onAdd(value);
            setNewTodo('');
            }
            
            }}>Add</button>
    </div>
  )
}
