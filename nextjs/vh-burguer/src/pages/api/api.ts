import axios from "axios";
                
const apiLocal =  "https://localhost:7104/api/"; // colocar o localhost do visualStudio 
// const apiLocal =  "http://localhost:3000/api"; // colocar o localhost do visualStudio 

const apiRemota = "";

//criar um endereco da api dentro do axios
export const api = axios.create({
    baseURL: apiLocal
})