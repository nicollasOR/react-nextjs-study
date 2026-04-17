import styles from '../sub-header/sub_header.module.css'

const sub_header = () => {
    return(
        <>
        <header id={styles.header}>
            <img src="../imgs/Logo_footer.svg" id={styles.img_footer} alt="" />
            <a href="" id={styles.links}>Voltar</a>
        </header>
        
        </>
    )
}

export default sub_header