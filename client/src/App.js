
import './App.css';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import ViewTask from './component/ViewTask';
import AddTask from './component/AddTask';

function App() {
  return (
    <div >
      <BrowserRouter>
          <Routes>
            <Route path="/"  element={<ViewTask/>}/>
            <Route path="/addTask"  element={<AddTask/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
