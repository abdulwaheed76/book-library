import logo from './logo.svg';
import './App.css';
import Book from './pages/book';
import Student from './pages/student'
import {Routes,Route, Navigate} from 'react-router-dom'
import StudentEdit from './pages/studentEdit';
import AddStudent from './pages/addStudent';
import BookEdit from './pages/bookEdit';
import AddBook from './pages/addBook';

function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path='/' element={<Navigate to='/student'/>}/>
      <Route path='/book' element={<Book/>}/>
      <Route path='/book/:id' element={<BookEdit/>}/>
      <Route path='/book/add' element={<AddBook/>}/>
      <Route path='/student' element={<Student/>}/>
      <Route path='/student/:id' element={<StudentEdit/>}/>
      <Route path='/student/add' element={<AddStudent/>}/>
    </Routes>
    </div>
  );
}

export default App;
