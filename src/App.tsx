import { Route, BrowserRouter, Routes  } from "react-router-dom";
import { Counter } from "./features/counter/Counter";

import { AddTodo } from "./features/todos/AddTodo";
import { TodoList } from "./features/todos/TodoList";

function App() {
  return (
    <div className='container mx-auto mt-10'>
      <h1 className="text-3xl leading-10 tracking-widest uppercase text-center">todo list</h1>
      <AddTodo />
      <TodoList />
      
    </div>
  );
}

export default App;
