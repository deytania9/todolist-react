import './App.css';
import React, {useState} from 'react';
//importing components
import Form from './components/Form';
import TodoList from './components/TodoList';
  

//USE EFFECT
function App() {
  const[inputText, setInputText]=useState("");
  const[todos,setTodos]=useState([]);
  
  return (
    <div className="App">
      <header>
      <h1>Tania's Todo List</h1>
    </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} 
      />
      <TodoList 
      setTodos={setTodos} 
      todos={todos}/>
    </div>
  );
}

export default App;
