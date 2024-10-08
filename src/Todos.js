import { useState } from "react";

import { App } from "./App";


export function Todos({todos, doneTodo, removeTodo }){
    return <div className="Todos">
        {
         todos.map(el=>  <div className={el.done? "Todo done" : "Todo"}> <span className="todo-text"  >{el.title}</span>
         <span className="todo-btn">
            <i className="fas fa-check" onClick={ ()=>doneTodo(el.id)}></i>
            <i className="fas fa-trash"onClick={ ()=>removeTodo(el.id)}></i>
         </span>
         
         
         </div>)
        }
            
    </div>

}