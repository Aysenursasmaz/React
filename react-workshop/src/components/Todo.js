import React, { useState } from 'react'
import "./todo.css"


function Todo(){
const[tasks,setTasks]= useState([])
const[taskInput,setTaskInput]= useState("");

const addTask = ()=>{
    if(taskInput.trim()!==""){
        setTasks([...tasks,{text:taskInput,completed: false }])
        setTaskInput("");
    }
}
const removeTask = (index) =>{
    setTasks(tasks.filter((task,i) => i !==index))
}
return (
<div className='todo-container'>
    <h2 className='todo-title'>Todo List</h2>
   
    <div>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={addTask}>Add Task </button>
      </div>
      <ul>
        {tasks.map((task,index)=>(
            <li key = {index}>
                {task.text}
                <button onClick={()=>removeTask(index)}>Remove</button>

            </li>
        ))}
    </ul>
</div>

    )
        }
        export default Todo;
