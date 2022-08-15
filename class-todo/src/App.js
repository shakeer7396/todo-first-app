import './App.css';
import { Todos } from './Components/Todos';

// let todosdata =[
//   {id:1, value:"react",completed:false},
//   {id:2, value:"vdom",completed:false},
//   {id:3, value:"bable",completed:true},
//   {id:4, value:"web pack",completed:true},

// ]
function App() {
  return (
    <div className="App">
      <h2>Class-todo</h2>
      {/* <Todos todos={todosdata} /> direct passing data app.js to todos with using props*/}
      <Todos />
    </div>
  );
}

export default App;
