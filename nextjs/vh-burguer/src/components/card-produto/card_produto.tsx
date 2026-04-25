import style from './cardProduto.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'



const CardProduto = () => {
    return(
                <li className={style.lista_cardapios}>
                    <img src="../imgs/hamburguerExemplo.png" className={style.ex_card} alt="" />
                    <h4>Monster</h4>
                    <p>Hambúrguer brutal, suculento e exageradamente saboroso. lorem</p>
                    <div className={style.botoes}>
                        <span>R$ 35,00</span>
                        <button><FontAwesomeIcon icon={faCircleInfo} className={style.icone_botao} /></button>
                        <button><FontAwesomeIcon icon={faPenToSquare} className={style.icone_botao}/></button>
                        <button><FontAwesomeIcon icon={faTrashCan}    className={style.icone_botao}/></button>
                    </div>
                </li>
    )
}

export default CardProduto;