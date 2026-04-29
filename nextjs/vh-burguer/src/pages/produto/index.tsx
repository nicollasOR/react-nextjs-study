import Sub_header from "@/components/sub-header/sub_header";
import styles from "./produto.module.css";
import Footer from "@/components/footer/footer";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { api } from "../api/api";
import { listarCategoriaService } from "../api/categoriaService";
import { cadastrarProduto } from "../api/produtoService";

interface Categoria {
  CategoriaId: number;
  Nome: string;
}

const criarProduto = () => {
  const [categorias, setCategoria] = useState<Categoria[]>([]);
  const [descricaoVar, setDescricao] = useState<string>("");
    const [valor, setValor] = useState<string>();
    // const [valor, setValor] = useState<number>();
  const [img, setImg] = useState<File | null>(null);
  const [categoriaSelecionada, setCategoriaSelecionadas] = useState<number[]>(
    [],
  );

  async function listarCategoriaEmProduto() {
    const list = await listarCategoriaService();
    setCategoria(list.data);
    console.log(list.data);
  }

  async function Cadastrar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const dados : Produto = {
        nome
        Descricao,
        Imagem,
        Preco,
        CategoriaIds : categoriaSelecionada,
      };

      await cadastrarProduto(dados);
    } catch(error: any) {
        console.log(error.message);

    }
  }

  //quando o produto for finalizado a funcao listarCategoriaService entrará em ação
  useEffect(() => {
    listarCategoriaEmProduto();
  }, []);

  return (
    <>
      <Sub_header />
      <main id={styles.main} className="layout_guide">
        <h1>Criar produto</h1>
        <form id={styles.formulario}>
          <div className={styles.inserir_dados}>
            <label htmlFor="nome">Nome do produto</label>
            <input type="text" name="nome" placeholder="BBQ Especial" />
          </div>

          <div className={styles.inserir_dados} id={styles.descricao}>
            <label htmlFor="email">Descrição</label>
            {/* <input
              type="text"
              placeholder="Hamburguer com molho barbecue defumado com cebola caramelizada."
            /> */}
            {/* <textarea value={descricaoVar} onChange={(e) => setDescricao(e.target.value)}> </textarea> */}
          </div>

          <div className={styles.inserir_dados}>
            <label htmlFor="preco">Preço(R$)</label>
            <input type="text" name="preco" placeholder="40,00" />
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
                <option value={item.CategoriaId} key={item.CategoriaId}>
                  {item.Nome}
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
