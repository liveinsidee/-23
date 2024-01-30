import {useState} from "react";
import './App.css';

function App() {

  const [tasks, setTask] = useState([])
  const [inputData, setInputData] = useState('')

  const addPost = () => {
    setTask([...tasks, inputData])
  }

  return (
    <div className="App">
      <input type="text" value={inputData} onChange={(event) => {
        setInputData(event.target.value)
      }}/>
      <button onClick={addPost}>Add posts</button>

      <ul>
        {tasks.map((task) => (<li>{task}</li>))}
      </ul>
    </div>
  );
}

export default App;
