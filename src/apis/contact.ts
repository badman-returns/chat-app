import axios from "axios";
import { mockApi } from "./baseapi";

export async function getContacts(){
    try {
        const response = await mockApi.get(`/contacts`);
        if(response.status === 200){
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
}