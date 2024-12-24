import React , {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import { getStudentById } from '../service/studentService';
import '../css/DetailComponent.css'
function DetailComponent(){
    const [student, setStudent] = useState({id:"", name: "", phone:"", email:""})

    const {id} = useParams();// useLocal() => truyền một đối tượng

    useEffect(()=>{
        const fetData = async()=>{
            let p = await getStudentById(id);
            setStudent(p);
        }
        fetData();
    },[])
    
    return(
        <>
        <div class="detail-container">
            <h3> Chi tiết</h3>
            <div class="detail-card">
                <p>ID: {student.id}</p>
                <p>Name: {student.name} </p>
                <p>Phone: {student.phone} </p>
                <p>Email: {student.email} </p>
            </div>          
        </div>      
        </>
    )
}
export default DetailComponent;