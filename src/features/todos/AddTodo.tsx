import { useState } from "react"

import { useAppDispatch } from "../../app/hooks";

import { addNewTodo } from "./todosSlice";

export const AddTodo = () => {
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useAppDispatch();

  const handleAddNewTodo = () => {
    if (title && content) {
      dispatch(addNewTodo({title, content}));
      handleClear();
    }
  }

  const handleClear = () => {
    setTitle('')
    setContent('');
  }

  return (
    <div className="mt-10">
      <input 
        className="border w-full p-2 px-5" 
        placeholder="title"
        value={title}
        onChange={(e) => { setTitle(e.target.value)}}
      />
      <textarea
        className="border h-20 p-5 w-full mt-5"
        value={content}
        placeholder="content"
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="flex mt-5 justify-center gap-10">
        <button 
          className="border p-3 w-1/3"
          onClick={handleClear}
          >
            Clear
        </button>
        <button 
          className="border p-3 w-1/3"
          onClick={handleAddNewTodo}
          >
            Save
        </button>
      </div>
    </div>
  )
}