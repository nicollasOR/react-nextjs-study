import styles from '@/components/footer/footer.module.css'

const Footer = () => {
        return(
            <footer id={styles.footer}>
                <nav id={styles.parte_sup}>
                    <img src="../imgs/Logo_footer.svg" alt="" />
                <div id={styles.footer_links}>
                    <a href="" id={styles.nav_tiktok    }><img src="../imgs/tiktok.svg"    className="nav_img" alt="" />   </a>
                    <a href="" id={styles.nav_facebook  }><img src="../imgs/facebook.svg"  className="nav_img" alt="" />     </a>
                    <a href="" id={styles.nav_instagram }><img src="../imgs/instagram.svg" className="nav_img" alt="" />    </a>
                    <a href="" id={styles.nav_youtube   }><img src="../imgs/yt.svg"        className="nav_img" alt="" />  </a>
                </div>
                </nav>
                <hr id={styles.linha} />
                <p id={styles.texto_footer}>Copyright © 2025 VH Burguer | Todos os direitos reservados</p>

            </footer>
        )
}

export default Footer;