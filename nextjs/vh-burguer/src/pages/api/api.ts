import axios from "axios";
import secureLocalStorage from "react-secure-storage";
                
const apiLocal =  "https://localhost:7104/api/"; // colocar o localhost do visualStudio 
// const apiLocal =  "http://localhost:3000/api"; // colocar o localhost do visualStudio 

const apiRemota = "";

//criar um endereco da api dentro do axios
export const api = axios.create({
    baseURL: apiLocal
})

//pega todas as requisições antes de serem enviadasm
api.interceptors.request.use((config =>  {
    const token = secureLocalStorage.getItem("Token");
    //token ?? config.headers.Authorization = "Bearer" + token;
    if(token)
        config.headers.Authorization = "Bearer " + token;
    return config
}));