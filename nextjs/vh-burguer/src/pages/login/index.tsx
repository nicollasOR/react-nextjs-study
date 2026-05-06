import styles from "./login.module.css"
import { useState } from "react";
import { login } from "../api/authService";
import { useRouter } from "next/navigation";
import { ToastContainer, toast} from "react-toastify";


const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const routes = useRouter();

    const notificacao = (msg : string) => toast.success(msg);
    async function autenticar(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        try
        {
            await login(email, senha);
            notificacao("Login bem-sucedido");
            setTimeout(() =>{
                routes.push("home/"); 

            }, 2000)
        }
            catch(error: any){
            alert(error.message);
        }
    } 
    
    return (
        
        <>
            {/* <ToastContainer/> */}
            <main className={styles.main}>
                <img src="../imgs/hamburguer_login.png" alt="Hambúrguer com ingredientes flutuando em camadas sobre fundo escuro."/>
                <div className={styles.campo_login}>
                    <h1>Login</h1>
                    <form className={styles.formulario} onSubmit={autenticar}>
                        <div className={styles.campo_form}>
                            <label htmlFor="email">E-mail</label>
                            <input type="text" name="email" placeholder="email@exemplo.com" required 
                                value={email} onChange={(e) => setEmail(e.target.value)}
                                />
                        </div>
                        <div className={styles.campo_form}>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="senha" placeholder="*******" required
                                value={senha} onChange={(e) => setSenha(e.target.value)}
                                />
                        </div>
                        <a className={styles.esq_senha} href="">Esqueceu sua senha?</a>
                        <button>Entrar</button>
                    </form>
                </div>
            </main>
        </>

    )
}

export default Login;