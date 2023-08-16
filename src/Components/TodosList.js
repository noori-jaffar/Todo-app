import React from 'react';

const TodosList = ({todos, setTodos, setEditTodo}) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {...item, complete: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({id}) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };


const handleDelete = ({ id }) => {
  setTodos(todos.filter((todo) => todo.id !==id));
};
  return (
    <div>
      {todos.map((todo) => (
        <li className='list-item' key={todo.id}>
          <input type="text" value={todo.title} 
          className={`ist ${todo.completed ? "complete" : ""}`}
          onChange={(event) => event.preventDefault()}/>

          <div>
            <button className='button-complete task-button'onClick={() => handleComplete(todo)}>
              <span className='fa fa-check-circle'></span>
            </button>
            <button className='button-edit task-button' onClick={() => handleEdit(todo)}>
              <span className='fa fa-edit'></span>
            </button>
            <button className='button-delete task-button' onClick={() => handleDelete(todo)}>
              <span className='fa fa-trash'></span>
            </button>
          </div>
        </li>
    ))}
    </div>
  );
}

export default TodosList;
