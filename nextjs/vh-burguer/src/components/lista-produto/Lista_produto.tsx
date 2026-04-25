import CardProduto from '../card-produto/card_produto';
import styles from './listaProduto.module.css'

const ListaProduto = () => {
    return (
        <section className={`${styles.cardapio} layout_guide`}>
            <h2 id={styles.h2}>CARDÁPIO</h2>
            {/* componente da lista cardápio */}



            <div className={styles.botoes}>
                <button> Filtrar <img src="../imgs/edicoesF.svg" id={styles.editar} alt="" /></button>
                <div className={styles.botoes_adm}>
                    <button> Todas as promoções              </button>
                    <button> Adicionar produto               </button>
                </div>
            </div>

            <ul className={styles.hamburgueres_lado_sup}>
                <CardProduto />
                <CardProduto />
                <CardProduto />
            </ul>

        </section>
    )
}

export default ListaProduto;