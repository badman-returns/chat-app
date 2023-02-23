import axios from "axios";

export async function getContacts(){
    try {
        const response = await axios.get(`http://localhost:3001/contacts`);
        if(response.status === 200){
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
}