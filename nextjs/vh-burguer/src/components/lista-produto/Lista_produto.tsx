import { useEffect, useState } from 'react';
import CardProduto from '../card-produto/card_produto';
import styles from './listaProduto.module.css'
import { excluirProduto, listarProduto } from '@/pages/api/produtoService';
import { erro, notificacao, ToastconfirmarExclusao } from '@/utils/toast';

interface Produto{
    produtoID: number,
    nome: string,
    descricao: string,
    preco: number,
    imagemURL: string,
    statusProduto : boolean
}

// const [produtos, setProdutos] = useState<Produto[]>([])



const ListaProduto = () => {
    const [produtos, setProdutos] = useState<Produto[]>([])


    async function confirmarExclusão(produtoID: number){
    
    ToastconfirmarExclusao(async () => {
        try{
            await excluirProduto(produtoID)
            setProdutos((listaAtual) =>
                listaAtual.map((produtos2) =>
                    produtos2.produtoID === produtoID
                    ? {...produtos2, statusProduto: false}
                    : produtos2
                )    
            )
            notificacao("produto inativado")
            listar();
        }

        catch(error: any){
            erro(error.message)

        }
    })
}


    async function listar(){
        try{
            const lista = await listarProduto();
            setProdutos(lista)
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
                produtos.length > 0 ?
                 produtos.map
                 ((item) => (
                 <CardProduto 
                    key={item.produtoID} 
                    produtoId={item.produtoID}
                    titulo={item.nome}    
                    descricao={item.descricao} 
                    preco={item.preco} 
                    img={item.imagemURL}
                    onDelete={confirmarExclusão}
                    />
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