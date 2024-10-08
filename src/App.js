import { useState } from "react"
import { Todos, Tudos } from "./Todos";
import { AddTodo } from "./AddTodo";





 export function App(){

    const[todos,setTodos]=useState([
        // {id:1, title:"anna", done:false},
        // {id:2, title:"anahit", done:false},
        // {id:2, title:"diana", done:true},
    ]);

    const addTodo=(name)=>{
        const newTodo={
            id:Date.now(),
            title:name,
            done:false

        };

        setTodos([newTodo, ...todos])
    }

    const removeTodo=(id)=>{
        const newTodo=todos.filter(el=> el.id !== id);
        setTodos(newTodo)
    }

    const doneTodo=(id)=>{
        const  newTodo= todos.map(el=>{
          if(el.id===id) el.done = !el.done
          return el;
        })
        setTodos (newTodo)
    }


    return <div className="App">
        <AddTodo  addTodo={addTodo}/>
       <Todos todos={todos} doneTodo={doneTodo} removeTodo={removeTodo} />
    </div>
}