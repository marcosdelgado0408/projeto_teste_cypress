import React from "react";


const Todo = ({ todo }) => {


    return(
    
    <div className="todo">
            
        <div className="content">
          <p>{todo.text}</p>
          <p className="category">({todo.category})</p>
        </div>

        <div className="botoes">
          <button className="completar">Completar</button>
          <button className="deletar">Deletar</button>
        </div>


      </div>    
    )
}

export default Todo