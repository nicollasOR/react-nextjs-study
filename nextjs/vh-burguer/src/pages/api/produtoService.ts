import { api } from "./api";

type Produto ={
    nome: string,
    descricao: string,
    imagem: File | null,
    preco: string,
    categoriaIds:  number[]
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
    throw new Error(error.msg)
}

}
