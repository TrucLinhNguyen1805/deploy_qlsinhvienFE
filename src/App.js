import logo from './logo.svg';
import './App.css';
import ListComponent from './component/ListComponent';
import HeaderComponent from './component/HeaderComponent';
import {Routes,Route} from "react-router-dom"
// import AddComponent from './component/AddComponent';
import DetailComponent from './component/DetailComponent';
import AddComponentForm from './component/AddComponentForm';
import { ToastContainer } from 'react-toastify';
import LoginComponent from './component/LoginComponent';
import EditComponent from './component/EditComponent';


function App() {
  return (
    <>
        <ToastContainer/>
        <HeaderComponent/>
        <Routes>
            <Route path='/login' element={<LoginComponent/>}></Route>
            <Route path='/student' element={<ListComponent/>}></Route>
            <Route path='/student/create' element={<AddComponentForm/>}></Route>
            <Route path={'/products/detail/:id'} element={<DetailComponent/>}></Route>
            <Route path={'/products/edit/:id'} element={<EditComponent/>}></Route>
        </Routes>
    </>
  );
}

export default App;
