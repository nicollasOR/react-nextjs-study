import { api } from "./api";

type Produto ={
    Nome: string,
    Descricao: string,
    Imagem: File | null,
    Preco: string,
    CategoriaIds:  number[]
}

export async function cadastrarProduto(dados: Produto){

 try
{
    const formData = new FormData();

    formData.append("Nome", dados.Nome);
    formData.append("Preco", dados.Preco);
    formData.append("Descricao", dados.Descricao);
    if(dados.Imagem)
        formData.append("Imagem", dados.Imagem);

    dados.CategoriaIds.forEach((id) => 
    {
        formData.append("CategoriasIds", id.toString());
    })
    await api.post("Produto", {formData})
    console.log("deu certo");
}

catch(error:any)
{
    throw new Error(error.msg)
}

}
