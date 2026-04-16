import styles from "./header.module.css"

const Header = () => {
    return(
        <header id={styles.header}>
            <div className={`${styles.container} layout_guide`}>
            <img src="../imgs/Logo_VH_Burguer.svg" id={styles.logo_logo} alt="foto da logo de nossa página" />
            <nav id={styles.nav_menu}>
                <a href="" className={styles.nav_links}>Destaques</a>
                <a href="" className={styles.nav_links}>Cardápio</a>
                <a href="" className={styles.nav_links}>Unidades</a>
                <a href="" className={styles.nav_links}>Login</a>
            </nav>

            <button id={styles.btn_icon}>
                <img src="../imgs/icon_hamburguer.svg" alt="Ícone que representa um hamburguer para acessar o menu lateral" />
            </button>
            </div>
        </header>
    )
}

export default Header;