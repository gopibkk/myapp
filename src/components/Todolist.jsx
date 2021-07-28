import { useState } from 'react'
import Todo from "./todo";
import TodoForm from './form';

//inital List
const Todolist = () => {
  const [todos, setTodos] = useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }
  ]);

    const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
    }

    const removeTodo = index => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
    }

  return (
    //  <>
    //  <h1 className="h1">{ title }</h1>
    //  {todos.map((todo, i) => (
    //     <div className="todo" key={i} id= {i} onClick={removeTodo}>{todo.text}</div>
    //   ))}
    //   <form onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     className="input"
    //     value={value}
    //     placeholder="Add Todo..."
    //     onChange={e => setValue(e.target.value)} />
    // </form>
    // </>

    <div className="app">
      <div className="todo-list" >
        <h1>My Todo List...</h1>
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>

      // <div class="container">
      //   <div class="row">
      //     <div class="col">
      //           <div className="app">
      //       <div className="todo-list" >
      //         <h1>Yesterday's list...</h1>
      //         {todos.map((todo, i) => (
      //           <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
      //         ))}
      //         <TodoForm addTodo={addTodo} />
      //       </div>
      //     </div>
      //     </div>
      //     <div class="col">
      //           <div className="app">
      //       <div className="todo-list" >
      //         <h1>Today's list...</h1>
      //         {todos.map((todo, i) => (
      //           <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
      //         ))}
      //         <TodoForm addTodo={addTodo} />
      //       </div>
      //     </div>
      //     </div>
      //     <div class="col">
      //           <div className="app">
      //       <div className="todo-list" >
      //         <h1>Tomorrow's list...</h1>
      //         {todos.map((todo, i) => (
      //           <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
      //         ))}
      //         <TodoForm addTodo={addTodo} />
      //       </div>
      //     </div>
      //     </div>
      //   </div>
      // </div>


  );
}
export default Todolist;
