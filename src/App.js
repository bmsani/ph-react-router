import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Friends from './Components/Friends/Friends';

function App() {
  return (
    <div className="App">
      <h1 className='text-9xl'>Welcome to my Fancy routing website</h1>
      <Routes>
        <Route> path="/" element={<Home/>}</Route>
        <Route> path="/friends" element={<Friends/>}</Route>
      </Routes>
    </div>
  );
}

export default App;
