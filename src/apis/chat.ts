import axios from "axios";
import { mockApi } from "./baseapi";

export async function getChatById(id: number){
    try {
        const response = await mockApi.get(`/chat/${id}`);
        if(response.status===200){
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
}