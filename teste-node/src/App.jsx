import { useState } from 'react'
import "./App.css"
import Todo from './components/Todo';
import TarefaForm from './components/TarefaForm';



function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },

    {
      id: 2,
      text: "Ir para academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text:"Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ]);



  const addTodo = (text, category) => {

    // vai receber todo o array todos atual , e mais um 
    const newTodos = [...todos, {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false
    }]

    setTodos(newTodos);
  }



  return (
    // precisa ter uma div pai abraçando todo mundp
    <div className="app">
     
      <h1>Lista de tarefas</h1>
      <div className="todolist"></div>
        {todos.map((todo)=> (
          <Todo key={todo.id} todo={todo} />
          ))}
        
      <div>
          <TarefaForm addTarefa={addTodo} />
      </div>
    
    
    </div>


  ); 
  






}

export default App
