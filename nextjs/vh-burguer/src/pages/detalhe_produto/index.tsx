import Sub_header from '@/components/sub-header/sub_header';
import styles from './detalhe_produto.module.css'
import Footer from '@/components/footer/footer';
const detalhe_Produto = () => {

    return(
        <>
        <Sub_header/>

        <article className={`${styles.article} layout_guide`}>
            <h1 id={styles.h1}>Detalhes do X-Bacon</h1>
            <img src="../imgs/hamburguerExemplo.png" id={styles.img} alt="" />
            <section className={styles.produto_detalhes}>
                <aside className={styles.lado_esq}>
                    <div id={styles.lado_sup}>
                    <h2 className={styles.h2}>Nome do Produto</h2>
                    <p >Monstro</p>
                    </div>

                    <div id={styles.lado_infer}>
                    <h2 className={styles.h2}>Detalhes do X-Bacon</h2>
                    <p >
                        Um pão brioche macio segura a fera: duas (ou três) carnes altas e suculentas, queijo cheddar derretido escorrendo pelas laterais, bacon crocante, cebola caramelizada no ponto adocicado, alface fresca, tomate e um molho especial intenso que amarra tudo. Para completar o ataque, uma camada extra de onion rings ou molho defumado que transforma cada mordida numa explosão.
                    </p>
                    </div>
                </aside>
                
                <aside className={styles.lado_dir}>
                    <div id={styles.lado_sup}>
                    <h2 className={styles.h2}>Preço (R$)</h2>
                    <p >R$ 35,00</p>
                    </div>

                    <div id={styles.lado_infer}>
                    <h2 className={styles.h2}>Categoria</h2>
                    <ul id={styles.lista}>
                    <li>Premium</li>
                    <li>Artesanal</li>
                    </ul>
{/* className={styles.texto_p} */}
                    </div>
                </aside>


                
            </section>
        </article>

        <Footer></Footer>
        </>
    )
}

export default detalhe_Produto;

// rafce