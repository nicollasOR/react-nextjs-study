import CardProduto from '../card-produto/card_produto';
import styles from './listaProduto.module.css'

const ListaProduto = () => {
    return (
        <>
                <main id={styles.lista_produto}>
                    <div id={styles.filtro}>
                    <h3>Filtrar</h3>
                    <img src="../imgs/edicoesF.svg" alt="" />
                </div>

                </main>
            <main id={styles.lista_produto}>
                <div id={styles.filtro}>
                    <h3>Filtrar</h3>
                    <img src="../imgs/edicoesF.svg" alt="" />
                </div>
                <ul id={styles.hamburgueres_lado_sup}>
                <CardProduto/>
                <CardProduto/>
                <CardProduto/>
                </ul>
                
            </main>
        </>
    )
}

export default ListaProduto;