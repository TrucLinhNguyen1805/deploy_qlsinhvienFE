// account = {
//     username: "",
//     password: "",
//     role: ""
// }
import { checkLogin } from "../service/accountService";
export function login(loginInfor){
    // return{
    //     type: "LOGIN",
    //     payload: account
    // }
    return async (dispatch)=>{
        const account = await checkLogin(loginInfor)
        if(account!==null){
            // call API
            dispatch ({
                type: "LOGIN",
                payload: account
        })
        return true;
        }else{
            console.log("Login không thành công!");
            return false;
        }
        
    }
}
export function logout(){
    return{
        type: "LOGOUT",
        payload: null
    }
}