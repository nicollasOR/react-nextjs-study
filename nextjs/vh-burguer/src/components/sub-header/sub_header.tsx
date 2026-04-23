import Link from 'next/link'
import styles from '../sub-header/sub_header.module.css'
const sub_header = () => {
    return(
        <>
        <header id={styles.header}>
            <img src="../imgs/Logo_footer.svg" id={styles.img_footer} alt="" />
            <Link href="/home" id={styles.links}>Voltar</Link>
        </header>
        
        </>
    )
}

export default sub_header