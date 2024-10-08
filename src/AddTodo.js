import { useState } from "react"

export function AddTodo({addTodo}) {
    const [input, setInput]=useState('');

    const submitHendler = (e)=>{
        e.preventDefault();
        if(input.trim().length===0) return;

        addTodo(input);
        setInput('');

    }

    return<form onSubmit={submitHendler}>
        <input type="text" placeholder="your name" onChange={(e)=> setInput(e.target.value)} value={input}></input>
        <input type="submit" value="Add"></input>
    </form>
}