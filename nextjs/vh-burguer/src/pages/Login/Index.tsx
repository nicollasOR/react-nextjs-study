import { Fragment } from "react/jsx-runtime";
import styles from "./login.module.css"

const Login = () => {
    return (

        <>
            <main className={styles.main}>
                <img src="/imgs/hamburguer_login.png" className={styles.img} alt="" />
                <aside className="aside">
                    <h1 className={styles.h1}>LOGIN</h1>
                    <form action="" className={styles.form}>
                        <div className={styles.camp_form}>
                            <label htmlFor="" className={styles.label}>E-mail</label>
                            <input type="text" placeholder="email@exemplo.com" className={styles.input} name="" id="" />
                        </div>
                        <div className={styles.camp_form}>
                            <label htmlFor="" className={styles.label}>Senha</label>
                            <input type="text" placeholder="********" className={styles.input} name="" id=""  required/>
                        </div>
                        <a href="chatgpt.com" className={styles.a}>Esqueceu sua Senha?</a>
                        <button className={styles.button}>Entrar</button>
                    </form>
                </aside>
            </main>
        </>

    )
}

export default Login;