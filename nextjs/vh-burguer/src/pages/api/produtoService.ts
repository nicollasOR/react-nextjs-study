import { api } from "./api";

type Produto ={
    nome: string,
    descricao: string,
    imagem: File | null ,
    preco: string,
    categoriaIds:  number[],
    imagemURL: string
}

export async function cadastrarProduto(dados: Produto){

 try
{
    const formData = new FormData();

    formData.append("Nome", dados.nome);
    formData.append("Preco", dados.preco);
    formData.append("Descricao", dados.descricao);
    if(dados.imagem)
        formData.append("Imagem", dados.imagem);

    dados.categoriaIds.forEach((id) => 
    {
        formData.append("CategoriasIds", id.toString());
    })
    await api.post("Produto", {formData})
    console.log("deu certo");
}

catch(error:any)
{
    throw new Error(error.response.data)
}

}

export async function listarProduto(){
    try{
        const response = await api.get("Produto");
        // console.log(response.data)
        // return response.data

        const produtosLink = response.data.map((valor : Produto) => ({
            ...valor, 
            imagemURL: `${api.defaults.baseURL}${valor.imagemURL}`
        }))
        return produtosLink
    }

    

    catch(error: any){
        throw new Error(error.response.data);
    }


}

export async function ListarProdutoPorId(id: number){
        const response = await api.get("Produto/" + id);

        const produtosLink = {
            ...response, 
            imagemURL: `${api.defaults.baseURL}${response.data.imagemURL}`
        }
        return produtosLink.data

}