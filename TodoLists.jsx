import React from 'react'
import TodoListItems from './TodoListItems'
import { useState, useEffect } from 'react'


const TodoLists = () => {

   const [todos, setTodos] = useState([])
   const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos?_limit=10')
      

   // För att hämta data från database
   useEffect(() => { 
    const getTodos = async () => {
        const res = await fetch(url)
        const data = await res.json()
        setTodos(data)
       }
       getTodos()    
   }, [url])

   // To save data in localstorage by using useEffect

   useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
   }, [todos])

  return (
    <div>
        {
          todos.map( todo => <TodoListItems key={todo.id} todo={todo} />) 
        }

        <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos?_limit=10')}>10</button>
        <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos?_limit=20')}>20</button>
        <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/todos?_limit=30')}>30</button>
    </div>
  )
}

export default TodoLists