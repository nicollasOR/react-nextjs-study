import Sub_header from "@/components/sub-header/sub_header";
import styles from "./produto.module.css";
import Footer from "@/components/footer/footer";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import { use, useEffect, useState } from "react";
import { listarCategoriaService } from "../api/categoriaService";
import {
  cadastrarProduto,
  editarProduto,
  ListarProdutoPorId,
} from "../api/produtoService";
import Toast from "@/components/toast/toast";
import { notificacao, erro } from "@/utils/toast";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { verificarAutenticacao } from "@/utils/autenticacao";
interface Categoria {
  categoriaId: number;
  nome: string;
}

const CriarProduto = () => {
  const [categorias, setCategoria] = useState<Categoria[]>([]);

  const [nome, setNome] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [preco, setPreco] = useState<string>("");
  const [imagem, setImg] = useState<File | null>(null);
  const [categoriasSelecionadas, setCategoriaSelecionadas] = useState<number[]>(
    [],
  );
  const [estaAutenticado, setEstaAutenticado] = useState(false);
  const [imagemURL, setImagemURL] = useState<string>("");

  const router = useRouter();
  const id = router.query.id;
  let telaEditar = id ? true : false;

  async function listarCategoriaEmProduto() {
    const list = await listarCategoriaService();
    setCategoria(list.data);
  }

  async function carregarInformacoes() {
    if (!id) return;

    const produto = await ListarProdutoPorId(Number(id));
    setNome(produto.nome);
    setDescricao(produto.descricao);
    setPreco(produto.preco);
    setCategoriaSelecionadas(produto.categoriaIds);
  }

  async function salvarProduto(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const dados = {
        nome,
        descricao,
        preco,
        imagem, //: imagem,
        categoriaIds: categoriasSelecionadas,
      };

      // await cadastrarProduto(dados);
      if (telaEditar) {
        await editarProduto(Number(id), dados);
        notificacao("Produto editado!");
      } else {
        await cadastrarProduto(dados);
        notificacao("Produto cadastrado");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }

  //quando o produto for finalizado a funcao listarCategoriaService entrará em ação
  useEffect(() => {
    if (!router.isReady) return;
    if (!verificarAutenticacao()) {
      router.push("/home");
      return;
    }
    setEstaAutenticado(true);
    listarCategoriaEmProduto();
    carregarInformacoes();
  }, [router.isReady, id]);

  if (!estaAutenticado) return null;

  return (
    <>
      <Sub_header />
      <Toast />
      <main id={styles.main} className="layout_guide">
        <h1>{telaEditar ? "Editar Produto" : "Criar Produto"}</h1>
        <form id={styles.formulario} onSubmit={salvarProduto}>
          <div className={styles.inserir_dados}>
            <label htmlFor="nome">Nome do produto</label>
            <input
              type="text"
              onChange={(e) => setNome(e.target.value)}
              value={nome}
              name="nome"
              placeholder="BBQ Especial"
            />
          </div>

          <div className={styles.inserir_dados} id={styles.descricao}>
            <label htmlFor="">Descrição</label>
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            ></textarea>
          </div>

          <div className={styles.inserir_dados}>
            <label htmlFor="preco">Preço(R$)</label>
            <input
              type="text"
              onChange={(e) => setPreco(e.target.value)}
              value={preco}
              name="preco"
              placeholder="40,00"
            />
          </div>

          <div className={styles.inserir_dados} id={styles.selectDiv}>
            <label htmlFor="categorias">Categoria</label>
            <select
              value={categoriasSelecionadas.map(String)}
              multiple
              onChange={(e) =>
                setCategoriaSelecionadas(
                  Array.from(e.target.selectedOptions).map((option) =>
                    Number(option.value)
                  )
                )
              }
              id={styles.select}
            >
              {categorias.map((item) => (
                <option value={item.categoriaId} key={item.categoriaId}>
                  {item.nome}
                </option>
              ))}
            </select>
            <Link href="/login" id={styles.adicionarC}>
              Adicionar categoria
            </Link>
          </div>

          <div className={styles.inserir_dados}>
            <label htmlFor="url_img">URL da Imagem</label>
            <input
              type="file"
              onChange={(e) => {
                if (e.target.files && e.target.files[0])
                  setImg(e.target.files[0]);
                else return;
              }}
              name="url_img"
              placeholder="https://unsplash.com/pt-br/fotografias/cheseburger-de-"
            />
          </div>

          <div className={styles.enviar_botoes}>
            <button id={styles.add_save}>Salvar</button>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default CriarProduto;
