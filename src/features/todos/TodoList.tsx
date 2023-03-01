import { useAppSelector } from "../../app/hooks"

export const TodoList = () => {

  const todos = useAppSelector(state => state.todos);
  return (
    <section className="mt-10 border p-5">
        {todos.map(todo => 
          <article className="border mt-5 p-3">
            <h1 className="font-bold text-center">{todo.title}</h1>
            <p>{todo.content}</p>
            <div className="mt-5 gap-10 flex justify-center">
              <button className="w-1/3 border">Edit</button>
              <button className="w-1/3 border">delete</button>
            </div>
          </article>  
        )}
    </section>
  )
}