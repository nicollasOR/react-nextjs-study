import { api } from "./api";
export async function cadastrarCategoria(nome: string) {
  try {
    // const response =
    await api.post("Categoria", { nome });
    console.log("eba deu certo");
  } 
  catch (error: any) 
  {
    throw new Error(error.response.data);
  }
}

export async function listarCategoriaService() {
  try {
    const response = await api.get("Categoria");
    return response;
  } 
  catch (error: any) {
    throw new Error(error.response.data);
  }
}
