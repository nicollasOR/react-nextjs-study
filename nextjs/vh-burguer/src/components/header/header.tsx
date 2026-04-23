import Link from "next/link";
import styles from "./header.module.css"

const Header = () => {
    return(
        <header id={styles.header}>
            <div className={`${styles.container} layout_guide`}>
            <img src="../imgs/Logo_VH_Burguer.svg" id={styles.logo_logo} alt="foto da logo de nossa página" />
            <nav id={styles.nav_menu}>
                <Link href="" className={styles.nav_links}>Destaques</Link>
                <Link href="" className={styles.nav_links}>Cardápio</Link>
                <Link href="" className={styles.nav_links}>Unidades</Link>
                <Link href="/login" className={styles.nav_links}>Login</Link>
            </nav>

            <button id={styles.btn_icon}>
                <img src="../imgs/icon_hamburguer.svg" alt="Ícone que representa um hamburguer para acessar o menu lateral" />
            </button>
            </div>
        </header>
    )
}

export default Header;