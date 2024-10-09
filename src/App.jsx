import { useState } from 'react'
import './App.css'
import ToDoItem from './ToDoItem';

function App() {
  const [inputText , setInputText] = useState("") ;
  const [items, setItems] = useState([]) ;
 

  function addItem(){
    setItems((prevItem) => {
      return[...prevItem , inputText]
    }
    )
    setInputText("")
  }
  
  function deleteItem(id){
      setItems((prevItem) => {
         return prevItem.filter((item, index) =>{
          return index !== id;
        })
      })
  }
  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={(e) => setInputText(e.target.value)}
        value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul> 
         {items.map((toDoItem, index) =>(
          <ToDoItem 
          key = {index}
          id = {index}
          text = {toDoItem}
          onChecked = {deleteItem}
          />
         ))}
        </ul>
      </div>
    </div>
  );
}

export default App
