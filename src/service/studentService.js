import axios from "axios"
// const studentList = [
//     {
//         id: 1,
//         name: 'Nguyễn Trúc Linh',
//         phone: '0987654321',
//         email: 'truclinhnguyen@gmail.com',
//         gender: 'Nữ',
//         interest: 'Đọc sách',
//         location: 'Quảng Nam'
//     },
//     {
//         id: 2,
//         name: 'Nguyễn Bảo Ngân',
//         phone: '0987654321',
//         email: 'ngannguyen@gmail.com',
//         gender: 'Nữ',
//         interest: 'Đọc sách',
//         location: 'Quảng Nam'
//     },
//     {
//         id: 3,
//         name: 'Nguyễn Văn Thanh Tuấn',
//         phone: '0987654321',
//         email: 'thanhtuan@gmail.com',
//         gender: 'Nam',
//         interest: 'Đọc sách',
//         location: 'Quảng Nam'
//     }
//   ]
  export async function getAllStudent() {
    try{
        const response = await axios.get("https://deploy-qlsinhvienbe.onrender.com/student");
        console.log(response); 
        return response.data;
    }catch(e){
        console.log("Lỗi"+e);
    }
        // return studentList;
    }
    
    export async function addNewStudent(student) {
    // kết nối API để thêm mới
        try{
        const response = await axios.post("https://deploy-qlsinhvienbe.onrender.com/student", student);
        
    }catch(e){
        console.log("Lỗi"+e);
    }
    } 
    export async function getStudentById(id) {
        try{
            const response = await axios.get("https://deploy-qlsinhvienbe.onrender.com/student/"+id);
            console.log(response); 
            return response.data;
        }catch(e){
            console.log("Lỗi"+e);  
            return null;
        }
        
    }
    export async function deleteStudentById(id){
        try{
            const response = await axios.delete("https://deploy-qlsinhvienbe.onrender.com/student/"+id);
            console.log(response); 
            return response.data;
        }catch(e){
            console.log("Lỗi"+e);  
            return null;
        }
    }
    export async function searchStudentByName(searchName, locationId){
        let url = `https://deploy-qlsinhvienbe.onrender.com/student?name_like=${searchName}&location.id=${locationId}&_sort=name&_order=asc`
        if(locationId==""){
            url = `https://deploy-qlsinhvienbe.onrender.com/student?name_like=${searchName}&_sort=name&_order=asc`
        }
        try{
            const response = await axios.get(url);
            return response.data;
        }catch(e){
            console.log("Lỗi"+e);  
            return null;
        }
    }
    // export function editStudentById(id) {
    //     for (let i = 0; i <studentList.length ; i++) {
    //         if (studentList[i].id==id){
    //             studentList.splice(i,1);
    //             break;
    //         }
    //     }
    // }
    // export function searchByName(name){
    //     return studentList.filter(student => student.name.includes(name));
    // }
   