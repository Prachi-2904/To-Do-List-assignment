import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './component/NavBar';
import { TodoList } from './component/TodoList';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <TodoList/>
    </div>
  );
}

export default App;
