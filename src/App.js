import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Dashboard/>} />
      <Route path="/login" element={ <Login/> } />

      {/* <Route path="/movies/list" exact element={ MoviesList } /> */}
      {/* <Route path="/movies/list" exact element={ <MoviesList/> } /> */}
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;