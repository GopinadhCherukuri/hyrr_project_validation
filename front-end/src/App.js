import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './components/SignIn';
import SignUp from './components/SignUp';
import PaginationComponent from './components/Pagenation';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/pagination' element={<PaginationComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
