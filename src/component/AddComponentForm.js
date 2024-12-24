import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import {useNavigate} from 'react-router-dom';
import {Field, Formik, Form, ErrorMessage} from "formik";
import { addNewStudent } from "../service/studentService";
import * as Yup from 'yup';
import '../css/AddComponent.css' ;
import { getAllLocation } from "../service/locationService";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AddComponentForm(){
    const [locationList, setLocationList] = useState([]);
    const [student, setStudent] = useState({
        // id:"", 
        name:"", 
        phone:"", 
        email:'', 
        gender: 'Nam', 
        interest: ['Nghe nhạc'], 
        location: '' 
    })
    useEffect(()=>{
        const fetchData = async()=>{
            const list = await getAllLocation();
            setLocationList(list);
        }
        fetchData();
    })
    const navigate = useNavigate();
    const handleSubmit= async(value)=>{
        console.log(value);
        const student ={
            ...value,
            location: JSON.parse(value.location)
        }
        await addNewStudent(student);
        toast.success("Thêm mới thành công");
        navigate('/student');
    }
    const handleValidate = Yup.object({
        // id:Yup.number().required("ID không được để trống")
        // .min(1, 'Phải là số nguyên dương'),
        name: Yup.string().required('Yêu cầu k để trống')
        .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/,'Tên chưa đúng định dạng'),
        phone: Yup.number().required('Yêu cầu k để trống'),
        email: Yup.string().required('Yêu cầu k để trống')
        .matches(/^\S+@\S+\.\S+$/,'Email chưa đúng định dạng'),
        location: Yup.string().required('Yêu cầu chọn giá trị'),
        interest: Yup.array().min(1, 'Yêu cầu chọn ít nhật một giá trị'),

    })
    //validate: Kiểm tra tính hợp lệ của dữ liệu trước khi thêm mới

    return(
        <>
            <Formik initialValues={student} onSubmit={handleSubmit} validationSchema={handleValidate}>
                <Form>
                    {/* <div>
                        <label>ID:</label>
                        <Field type="text" name='id'/>
                        <ErrorMessage style={{color:'red'}} name="id" component='div'/>
                    </div> */}
                    <div>
                        <label>Name:</label>
                        <Field type="text" name='name'/>
                        <ErrorMessage style={{color:'red'}} name="name" component='div'/>
                    </div>
                    <div>
                        <label>Phone:</label>
                        <Field type="text" name='phone'/>
                        <ErrorMessage style={{color:'red'}} name="phone" component='div'/>
                    </div>
                    <div>
                        <label>Email:</label>
                        <Field type="text" name='email'/>
                        <ErrorMessage style={{color:'red'}} name="email" component='div'/>
                    </div>
                    <div>
                        <label>Gender:</label>
                        <Field type='radio' name='gender' value='Nam'/> Nam
                        <Field type='radio' name='gender' value='Nữ'/> Nữ
                        <ErrorMessage style={{color:'red'}} name="gender" component='div'/>
                    </div>
                    <div>
                        <label>Interest:</label>
                        <Field type='checkbox' name='interest' value='Nghe nhạc'/> Nghe nhạc 
                        <Field type='checkbox' name='interest' value='Đọc sách'/> Đọc sách
                        <Field type='checkbox' name='interest' value='Thể thao'/> Thể thao
                        <ErrorMessage style={{color:'red'}} name="interest" component='div'/>
                    </div>
                    
                    <div>
                        <label>Location:</label>
                        <Field as='select' name='location'>
                            <option>----Select----</option>
                            {locationList.map((m)=>(
                                <option value={JSON.stringify(m)}>{m.name}</option>
                            ))}
                            
                            
                        </Field> 
                        <ErrorMessage style={{color:'red'}} name="location" component='div'/>
                    </div>

                    <div>
                        <button className="btn btn-sm btn-success" type="submit">Save</button>
                    </div>
                    
                </Form>
            </Formik>
        </>
    )
}
export default AddComponentForm;