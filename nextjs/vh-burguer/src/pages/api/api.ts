import axios from "axios";
                
const apiLocal = ""; // colocar o localhost do visualStudio 

const apiRemota = "";

//criar um endereco da api dentro do axios
export const api = axios.create({
    baseURL: apiLocal
})