import Link from 'next/link'
import styles from '../sub-header/sub_header.module.css'
const Sub_header = () => {
    return(
        <>
        <header id={styles.header}>
            <Link href="/home" id={styles.links}><img src="../imgs/Logo_footer.svg" id={styles.img_footer} alt="" /></Link>
            <Link href="/home" id={styles.links}>Voltar</Link>
        </header>
        
        </>
    )
}

export default Sub_header