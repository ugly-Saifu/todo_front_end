import { useEffect, useState } from 'react';
import ToDo from './components/ToDo'
import { addToDo, getAllToDo, updateToDo, deleteToDo } from '../src/utils/HandleApi';

function App() {


  const [toDo, SetToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const[toDoId, setToDoId] = useState("")


  useEffect(() => {
    getAllToDo(SetToDo)
  },[])

  
const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
}

  return (
    <div className="App">
      <div className="container">
        <h1> TODO APP</h1>
        <div className="top">
          <input type="text" placeholder="Add ToDos...."
          value={text}
          onChange={(e) => setText(e.target.value)}
          />
          <div className="add" onClick={ isUpdating ? () => updateToDo(toDoId, text, SetToDo, setText, setIsUpdating) : () => addToDo(text, setText, SetToDo)}>
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">

          {toDo.map((item) => <ToDo  key={item._id} text={item.text}
          updateMode={() => updateMode(item._id, item.text)}
          deleteToDo={() => deleteToDo(item._id, SetToDo)}
          />)}

          <ToDo text="hi" /> 
        </div>
      </div>
    </div>
  )
}

export default App;
