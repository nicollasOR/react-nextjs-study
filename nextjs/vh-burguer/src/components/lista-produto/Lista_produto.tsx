import { useEffect, useState } from 'react';
import CardProduto from '../card-produto/card_produto';
import styles from './listaProduto.module.css'
import { listarProduto } from '@/pages/api/produtoService';

interface Produto{
    produtoID: number,
    nome: string,
    descricao: string,
    preco: number,
    imagemURL: string,
}


const ListaProduto = () => {
    const [produto, setProduto] = useState<Produto[]>([])

    async function listar(){
        try{
            const lista = await listarProduto();
            setProduto(lista)
            console.log(lista)
        }

        catch(error: any){
            console.log(error.message)

        }
    }
    useEffect(() =>
    {
        listar();
    }, [])

    return (
        <section className={`${styles.cardapio} layout_guide`}>
            <h2 id={styles.h2}>CARDÁPIO</h2>
            <div className={styles.botoes}>
                <button> Filtrar <img src="../imgs/edicoesF.svg" id={styles.editar} alt="" /></button>
                <div className={styles.botoes_adm}>
                    <button> Todas as promoções              </button>
                    <button> Adicionar produto               </button>
                </div>
            </div>

            <ul className={styles.hamburgueres_lado_sup}>
                {
                produto.length > 0 ?
                 produto.map
                 ((item) => (
                 <CardProduto 
                    key={item.produtoID} 
                    produtoId={item.produtoID}
                    titulo={item.nome}    
                    descricao={item.descricao} 
                    preco={item.preco} 
                    img={item.imagemURL}/>
                ))
                                    :(
                                        <p> carma, esta carregando meu fio</p>
                                    )
                }
                
                
            </ul>

        </section>
    )
}

export default ListaProduto;