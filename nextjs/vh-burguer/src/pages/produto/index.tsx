import Sub_header from "@/components/sub-header/sub_header";
import styles from "./produto.module.css";
import Footer from "@/components/footer/footer";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { listarCategoriaService } from "../api/categoriaService";
import { cadastrarProduto } from "../api/produtoService";
import Toast from "@/components/toast/toast";
import { notificacao, erro } from "@/utils/toast";

interface Categoria {
  categoriaId: number;
  nome: string;
}

const criarProduto = () => {
  const [nome, setNome] = useState<string>("");
  const [categorias, setCategoria] = useState<Categoria[]>([]);
  const [descricao, setDescricao] = useState<string>("");
  const [preco, setPreco] = useState<string>("");
  const [img, setImg] = useState<File | null>(null);
  const [categoriaSelecionada, setCategoriaSelecionadas] = useState<number[]>([]);
  const [imagemURL, setImagemURL] = useState<string>("");

  async function listarCategoriaEmProduto() {
    const list = await listarCategoriaService();
    setCategoria(list.data);
  }

  async function Cadastrar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const dados = {
        nome,
        descricao,
        preco,
        imagem: img,
        categoriaId: categoriaSelecionada,
      };

      console.log(dados);
      await cadastrarProduto(dados);
      notificacao("Produto cadastrado");
    } catch (error: any) {
      console.log(error.message);
    }
  }

  //quando o produto for finalizado a funcao listarCategoriaService entrará em ação
  useEffect(() => {
    listarCategoriaEmProduto();
  }, []);

  return (
    <>
      <Toast />
      <Sub_header />
      <main id={styles.main} className="layout_guide">
        <h1>Criar produto</h1>
        <form id={styles.formulario} onSubmit={Cadastrar}>
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
              multiple
              onChange={(e) =>
                setCategoriaSelecionadas(
                  Array.from(e.target.selectedOptions).map((option) =>
                    Number(option.value),
                  ),
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

export default criarProduto;
