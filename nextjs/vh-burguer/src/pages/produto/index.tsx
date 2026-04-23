import Sub_header from '@/components/sub-header/sub_header'
import styles from './produto.module.css'
import Footer from '@/components/footer/footer'
import Link from 'next/link'

const criarProduto = () => {
    return(
        <>
        <Sub_header/>
        <main id={styles.main} className="layout_guide">
            <h1>Criar produto</h1>
            <form id={styles.formulario}>
            <div className={styles.inserir_dados}>
                <label htmlFor="nome">Nome do produto</label>
                    <input type="text" name="nome" placeholder='BBQ Especial' />
            </div>

            <div className={styles.inserir_dados}>
                <label htmlFor="email">Descrição</label>
                <input type="text" 
                placeholder='Hamburguer com molho barbecue defumado com cebola caramelizada.' />
            </div>

            <div className={styles.inserir_dados}>
                <label htmlFor="preco">Preço (R$)</label>
                        <input type="text" name="preco" placeholder='40,00' />
            </div>

            <div className={styles.inserir_dados}>
                <label htmlFor="categorias">Categoria</label>
                    <select name="" id="">
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                <Link href="/login"> Adicionar categoria</Link>
            </div>

            <div className={styles.inserir_dados}>
                <label htmlFor="url_img">URL da Imagem</label>
                    <input type="text" name="url_img" placeholder='https://unsplash.com/pt-br/fotografias/cheseburger-de-' />
            </div>

            <div className={styles.enviar_botoes}>
            <button>Adicionar Promoção</button>
            <button>Salvar</button>
            </div>
            </form>       
        </main>
        <Footer/>
        </>
    )

}

export default criarProduto;