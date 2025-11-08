import { useState } from 'react';
const ToDo = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTodos] = useState([])
  const handleOnChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleOnClick = () => {
    setTodos([...tasks, inputValue])
    setInputValue("")
  }

  const handleDelete = (index) => {
    const updateTodos = tasks.filter((todos, i) => i !== index)
    setTodos(updateTodos)
  }

  return (
    <div className='container'>
      <h2>To do</h2>
      <div className='container__input'>
        <input type="text" value={inputValue} onChange={handleOnChange} />
        <button className='btn-add' onClick={handleOnClick}>Add</button>
      </div>
      <ul>
        {
          tasks.length > 0 ? tasks.map((todo, index) => {
            return (
              <li key={index}>{todo}<button className='btn-delete' onClick={() => { handleDelete(index) }}>Delete</button></li>
            )
          })
            :
            <p>No hay tareas aún</p>
        }




      </ul>
    </div>
  )
}

export default ToDo;