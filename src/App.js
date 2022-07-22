import logo from './logo.svg';
import './App.css';
import Book from './pages/book';
import Student from './pages/student'
import {Routes,Route, Navigate} from 'react-router-dom'
function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path='/' element={<Navigate to='/student'/>}/>
      <Route path='/book' element={<Book/>}/>
      <Route path='/student' element={<Student/>}/>
    </Routes>
    </div>
  );
}

export default App;
