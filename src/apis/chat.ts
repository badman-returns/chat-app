import axios from "axios";

export async function getChatById(id: number){
    try {
        const response = await axios.get(`http://localhost:3001/chat/${id}`);
        if(response.status===200){
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
}