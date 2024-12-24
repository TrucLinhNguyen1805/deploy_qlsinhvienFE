import axios from "axios";

export async function getAllLocation(){
    try {
        const res = await axios.get("http://localhost:8080/location");
        return res.data;
    } catch (e) {
        return [];
    }
}