import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import TaskForm from './components/TaskForm';
import UpdateTask from './components/UpdateTask';

function App() {

  return (
    <div>
      			<Router>
            <div className="container">
              <Routes>
                  <Route exact path="/" element={<TaskList/>}></Route>
                  <Route path="/tasks" element={<TaskList/>}></Route>
                  <Route path="/add-task" element={<TaskForm/>}></Route>
                  <Route path="/update-task/:id" element={<UpdateTask/>}></Route>
              </Routes>	
            </div>
            </Router>
    </div>
  );
}

export default App;
