import { api } from "./api";

type ProdutoFormulario = {
    nome: string,
    descricao: string,
    imagem: File | null,
    preco: string,
    categoriasIds: number[]
}

interface ProdutoListagem {
    nome: string,
    descricao: string,
    imagem: File | null,
    preco: string,
    categoriasIds: number[],
    imagemURL: string,
    statusProduto: boolean
}
// mudar categoriasIds na API pois está categoriaIds

export async function cadastrarProduto(dados: ProdutoFormulario) {

    try {
        const formData = new FormData();

        formData.append("nome", dados.nome);
        formData.append("preco", dados.preco);
        formData.append("descricao", dados.descricao);
        if (dados.imagem)
            formData.append("imagem", dados.imagem);

        dados.categoriasIds.forEach((id) => {
            formData.append("categoriasIds", id.toString());
        })
        // console.log(dados.nome)
        // console.log(dados.preco)
        // console.log(dados.descricao)
        // console.log(dados.imagem)
        // console.log(dados.categoriasIds)
        await api.post("Produto", { formData })
        console.log("deu certo");
    }

    catch (error: any) {
        throw new Error(error.response.data)
    }

}


export class produtoDTO_tsx {

    static toFormData(dados: ProdutoFormulario): FormData {

        const formData = new FormData();

        formData.append("nome", dados.nome);
        formData.append("preco", dados.preco);
        formData.append("descricao", dados.descricao);

        if (dados.imagem) {
            formData.append("imagem", dados.imagem);
        }

        dados.categoriasIds.forEach((id) => {
            formData.append("categoriasIds", id.toString());
        });

        return formData;
    }

    static toImagemURL(produto: ProdutoListagem) {

        return {
            ...produto,
            imagemURL: `${api.defaults.baseURL}${produto.imagemURL}`
        };
    }
}

export async function listarProduto() {
    try {
        const response = await api.get("Produto");
        // console.log(response.data)
        // return response.data


        const produtosAtivos = response.data.filter(
            (produto: ProdutoListagem) => produto.statusProduto === true
        )

        const produtosLink = produtosAtivos.map((produto: ProdutoListagem) => ({
            ...produto,
            imagemURL: `${api.defaults.baseURL}${produto.imagemURL}`
        }))
        return produtosLink
    }




    catch (error: any) {
        throw new Error(error.response.data);
    }


}

export async function ListarProdutoPorId(id: number) {
    try {
        const response = await api.get("Produto/" + id);

        const produtosLink = {
            ...response,
            imagemURL: `${api.defaults.baseURL}${response.data.imagemURL}`
        }
        return produtosLink

    }
    catch (error: any) {
        throw new Error(error.response.data)
    }
    // const response = await api.get("Produto/" + id);

    // const produtosLink = {
    //     ...response,
    //     imagemURL: `${api.defaults.baseURL}${response.data.imagemURL}`
    // }
    // return produtosLink

}


export async function excluirProduto(produtoId: number) {
    try {
        await api.delete("Produto/" + produtoId)
    }
    catch (erro: any) {
        throw new Error(erro.response.data)
    }
}


export async function editarProduto(produtoId: number, dados: ProdutoFormulario) {
    try {
        // const formData = new FormData();

        // formData.append("nome", dados.nome);
        // formData.append("preco", dados.preco);
        // formData.append("descricao", dados.descricao);
        // if (dados.imagem)
        //     formData.append("imagem", dados.imagem);

        // dados.categoriasIds.forEach((id) => {
        //     formData.append("categoriasIds", id.toString());
        // })
        //* ver se funciona neh

        const formData = produtoDTO_tsx.toFormData(dados)
        await api.put("Produto/" + produtoId, formData)
    }

    catch (erro: any) {
        throw new Error(erro.response.data)
    }
}