import { useEffect, useState } from "react";
import CardProduto from "../card-produto/card_produto";
import styles from "./listaProduto.module.css";
import { excluirProduto, listarProduto } from "@/pages/api/produtoService";
import { erro, notificacao, ToastconfirmarExclusao } from "@/utils/toast";
import Link from "next/link";
import { verificarAutenticacao } from "@/utils/autenticacao";
interface Produto {
  produtoID: number;
  nome: string;
  descricao: string;
  preco: number;
  imagemURL: string;
  statusProduto: boolean;
}


const ListaProduto = () => {
  const [estaAutenticado, setEstaAutenticado] = useState(false)
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [ordem, setOrdem] = useState("todos")
  const[pesquisa, setPesquisa] = useState("")

  async function confirmarExclusão(produtoID: number) {
    ToastconfirmarExclusao(async () => {
      try {
        await excluirProduto(produtoID);
        setProdutos((listaAtual) =>
          listaAtual.map((produtos2) =>
            produtos2.produtoID === produtoID
              ? { ...produtos2, statusProduto: false }
              : produtos2,
          ),
        );
        notificacao("produto inativado");
        listar();
      } catch (error: any) {
        erro(error.message);
      }
    });
  }

  async function listar() {
    try {
      const lista = await listarProduto();
      setProdutos(lista);
    } catch (error: any) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    setEstaAutenticado(verificarAutenticacao())
    listar();
  }, []);

    const produtosFiltrados = produtos.filter((produto) => produto.nome.toLowerCase().includes(pesquisa.toLowerCase()))
    .sort((a, b) => {
    if(ordem === "menor_valor")
            return a.preco - b.preco
    else if(ordem === "maior_valor")
        return b.preco - a.preco
        
    return a.produtoID - b.produtoID;
  })

  return (
    <section className={`${styles.cardapio} layout_guide`}>
      <h2 id={styles.h2}>CARDÁPIO</h2>
      {estaAutenticado && (
      <div className={styles.botoes}>
        <div className={styles.filtros}>
        <select name="" id="" value={ordem} onChange={(e) => setOrdem(e.target.value)}>Filtrar
            <option value="todos">Todos</option>
            <option value="menor_valor">Menor valor</option>
            <option value="maior_valor">Maior valor</option>


        </select>

        <label htmlFor="pesquisa">Pesquisa</label>
        <input type="text"  name="pesquisa" id="" value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} placeholder="Digite o nome do produto"/>
        </div>
        <div className={styles.botoes_adm}>
          <button> Todas as promoções </button>
          <Link href={'produto/'}>
            <button> Adicionar produto </button>
          </Link>
        </div>
      </div>
      )}

      <ul className={styles.hamburgueres_lado_sup}>
        {produtosFiltrados.length > 0 ? produtosFiltrados.map((item) =>(
                      <CardProduto
              key={item.produtoID}
              produtoId={item.produtoID}
              titulo={item.nome}
              descricao={item.descricao}
              preco={item.preco}
              img={item.imagemURL}
              onDelete={confirmarExclusão}
              usuarioAutenticado={estaAutenticado}
            />
        )
        ) : (
          <p> carma, esta carregando meu fio</p>
        )}
      </ul>
    </section>
  );
};

export default ListaProduto;
