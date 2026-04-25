import Footer from '@/components/footer/footer';
import style from './categoria.module.css'
import Sub_header from '@/components/sub-header/sub_header';
const criarCategoria = () =>{
    return(
        <>
        <Sub_header/>
        <article id={style.main} className="layout_guide">
            <h1> Criar categoria</h1>
                <form action="">
                    <div id={style.form}>
                    <label htmlFor="nome">Nome categoria</label>
                    <input type="text" name='nome' required placeholder='Premium'/>
                    </div>
                    <div className={style.enviar_botoes}>
                        <button>Cancelar</button>
                        <button>Salvar</button>
                    </div>
                </form>
        </article>
        <Footer/>
        
        </>
    )
}

export default criarCategoria;