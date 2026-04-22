import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import styles from './home.module.css'
import ListaProduto from "@/components/lista-produto/Lista_produto"


const Home = () => {
    return (
        <>
        <Header/>
        <main>
            {/* <section id={styles.banner}>
                <h1>Bem-vindo ao VH Burguer</h1>
                <img src="../imgs/foto_de_hamburgueres.png"  alt="" />
                <div id={styles.nav_links}>
                <a href="">Chamar atendente</a>
                <a href="">Ver cardápio</a>
                </div>
            </section>

            <section id={styles.destaques}>
            <article id={styles.lado_esq}>
                <p>Os queridinhos da galera</p>
                <h3>MAIS PEDIDOS</h3>
            </article>
                <div id={styles.lado_dir}>
                    <article id={styles.lado_super}>
                        <p>Lanches com</p>
                        <h3>MUITO BACON</h3>
                    </article>
                    <article id={styles.lado_infer}>
                        <p>Se tiver com muita fome</p>
                        <h3>SUPER COMBOS</h3>
                    </article>
                </div>  
            </section> */}
            <section id={styles.cardapio}>
                <h2 id={styles.h2}>CARDÁPIO</h2>
                {/* componente da lista cardápio */}
                <ListaProduto/>


            </section>
            <section id={styles.unidades}>
                {/* <img src="../imgs/unidade.jpeg" alt="" /> */}
                <div id={styles.img}></div>
                <ul id={styles.textos_direita}>
                    <h5>NOSSAS UNIDADES</h5>
                    <li>Centro – Av. Aurora, 742</li>
                    <li>Jardim – Av. das Palmeiras, 1280</li>
                    <li>Norte – Av. Horizonte, 305</li>
                    <li>Sul – Av. Nova Esperança, 910</li>
                </ul>
            </section>
        </main>
        <Footer/>
        </>
    )
}


export default Home;