import { api } from "./api";

export async function listarLogs(produtoId : number)
{
    try{
        const response = await api.get("LogAlteracaoProduto/produto/" + produtoId)
        return response.data;
    }

    catch(error: any){
        throw new Error(error.response.data)
    }
}