import CardProduto from '../card-produto/card_produto';
import styles from './listaProduto.module.css'

const ListaProduto = () => {
    return (
        <>
        
                
                <div id={styles.botoes}>
                <button> Filtrar <img src="../imgs/edicoesF.svg" id={styles.editar}  alt="" /></button>
                <div id={styles.botoes_adm}>
                <button> Todas as promoções              </button>
                <button> Adicionar produto               </button>
                </div>
                </div>

            <ul id={styles.hamburgueres_lado_sup}>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
            </ul>


        </>
    )
}

export default ListaProduto;