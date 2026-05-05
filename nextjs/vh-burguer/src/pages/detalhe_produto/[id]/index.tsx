import Sub_header from '@/components/sub-header/sub_header';
import styles from './detalhe_produto.module.css'
import Footer from '@/components/footer/footer';
import { useState, useEffect } from 'react';
import { listarProduto, ListarProdutoPorId } from '../../api/produtoService';
import { useParams } from 'next/navigation';
import { listarCategoriaService } from '@/pages/api/categoriaService';
import { formatarPreco } from '@/utils/formatacao';


interface Produto{
    produtoID: number,
    nome: string,
    descricao: string,
    preco: number,
    imagemURL: string,
    categorias: string[],
    categoriaIds: number[]
}

interface Categoria {
  categoriaIds: number;
  nome: string;
}

const detalhe_Produto = () => {

    const[produtos, setProdutos] = useState<Produto>();
    const [categorias, setCategoria] = useState<Categoria[]>([]);
    
      async function listarCategoriaEmProduto() {
        const list = await listarCategoriaService();
        setCategoria(list.data);
      }

    const params = useParams();

    const id = params?.id;


    async function listarProduto(){
        try{
            const response = await ListarProdutoPorId(Number(id))
            console.log(response)
            setProdutos(response)
        }

        catch(error:any)
        {
            console.log(error.data)
        }
    }

    useEffect(() =>{
        if(!id) return;
        setTimeout(() =>{
            listarProduto();
        }, 1000)
        listarProduto()
    }, [id])

      useEffect(() => {
    listarCategoriaEmProduto();
  }, []);

    return(

        <>
        <Sub_header/>

        <article className={`${styles.article} layout_guide`}>
            {produtos ? (
                <>
                            <h1 id={styles.h1}>Detalhes do {produtos.nome}</h1>
            <img src="../imgs/hamburguerExemplo.png" id={styles.img} alt="" />
            <section className={styles.produto_detalhes}>
                <aside className={styles.lado_esq}>
                    <div id={styles.lado_sup}>
                    <h2 className={styles.h2}>Nome do Produto</h2>
                    <p>{produtos.nome}</p>
                    </div>

                    <div id={styles.lado_infer}>
                    <h2 className={styles.h2}>Detalhes do {produtos.nome}</h2>
                    <p>
                        {produtos.descricao}
                    </p>
                    </div>
                </aside>
                
                <aside className={styles.lado_dir}>
                    <div id={styles.lado_sup}>
                    <h2 className={styles.h2}>Preço (R$)</h2>
                    <p >{formatarPreco(produtos.preco)}</p>
                    </div>

                    <div id={styles.lado_infer}>
                    <h2 className={styles.h2}>Categoria</h2>
                    <ul id={styles.lista}>
                        {produtos.categorias.map((item) => (
                            <li>
                                {item}
                            </li>
                        ))}
                    </ul>
                    </div>
                </aside>


                
            </section>
                </>
            ) :(<p> Carregando produto..</p>)}

            
        </article>

        <Footer></Footer>
        </>
    )
}

export default detalhe_Produto;

// rafce