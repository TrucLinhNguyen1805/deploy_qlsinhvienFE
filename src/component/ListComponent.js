import React,{useEffect, useRef, useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import { deleteStudentById, getAllStudent, searchStudentById, searchStudentByName } from "../service/studentService";
import {Link} from 'react-router-dom'
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { useSelector } from "react-redux";
import { getAllLocation } from "../service/locationService";
function ListComponent(){
    const [studentList, setStudentList] = useState([]);
    const [locationList, setLocationList] = useState([]);
    const account = useSelector(state => state.user.account);
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [deleteStudent, setDeleteStudent] = useState({id:'', name:''}); 
    const searchRef = useRef();
    const searchLocationIdRef = useRef();
    const [editStudent] = useState([]);
    useEffect( ()=>{
        const fetchData = async ()=>{
            const list = await getAllStudent();
            setStudentList(list);
        }
        
        const fetchDataLocation = async () =>{
            const list = await getAllLocation()
            setLocationList(list);
        }
        fetchData();
        fetchDataLocation();
    }, [isLoading]);
    const handleClose =()=>{
        setShow((pre) => !pre);
    }
    const handleShow =(student)=>{
        setShow((pre) => !pre);
        setDeleteStudent(student);

    }
    const handleDelete =()=>{
        deleteStudentById(deleteStudent.id);
        console.log(getAllStudent());
        setIsLoading((pre=> !pre));
        handleClose();
    }
    const handleSearch =()=>{
        let name = searchRef.current.value;
        let locationId = searchLocationIdRef.current.value;
        const fetchData = async ()=>{
            const searchList = await searchStudentByName(name,locationId);
            setStudentList(searchList);
        }
        fetchData();
    }
    return(
        <>
                
                <h2>Student List dfdfds</h2>
                
                    <input  ref={searchRef} name={'searchName'} placeholder={'Enter Search'}/>
                    <select ref={searchLocationIdRef}>
                        <option value={""}>------chọn------</option>
                        {locationList.map(e=>(
                            <option value={e.id}>{e.name}</option>
                        ))}
                    </select>
                    <button className={'btn btn-sm btn-success'} type={'button'} onClick={handleSearch}>Search</button><br/><br/>
                
                
                <button className={'btn btn-sm btn-primary'}>
                    <Link style={{ color: 'white', textDecoration: 'none' }} to={'/student/create'}>Add new Product</Link>
                </button>
                
                <table className={'table table-gray'}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Interest</th>
                        <th>Location</th>
                        <th>Edit</th>
                        {account && ((account.role == "Admin") ?<th>Delete</th> : '')}
                        <th>Detail</th>
                    </tr>
                    </thead>
                    <tbody>
                    {studentList&&studentList.map((e, i) => (
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{e.name}</td>
                            <td>{e.phone}</td>
                            <td>{e.email}</td>
                            <td>{e.gender}</td>
                            <td>{e.interest}</td>
                            <td>{e.location.name}</td>
                            <td>
                                <Link to={'/products/edit/'+e.id} className={'btn btn-warning btn-sm'}>Edit</Link>
                            </td>
                            {account && ((account.role == "Admin") ? <td>
                            <Button className={'btn-sm btn-danger'} variant="danger" onClick={() => {
                                    handleShow(e);
                                }}>
                                    Delete
                                </Button> 
                                
                            </td>: '')}
                            <td>
                            <Link to={'/products/detail/'+e.id} className={'btn btn-secondary btn-sm'}>Detail</Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Delete student</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Bạn có muốn xóa sinh viên {deleteStudent.name} không??</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Delete
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
    )
}
export default ListComponent;