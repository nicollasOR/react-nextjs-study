import style from './cardProduto.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { formatarPreco } from '@/utils/formatacao'
import Link from 'next/link'

type Produto = {
    titulo: string,
    descricao: string,
    img: string,
    preco: number,
    produtoId : number,
    onDelete: (produtoId: number) => void,

}

const CardProduto = ({titulo, descricao, img, preco, produtoId, onDelete} : Produto) => {
    return(
                <li className={style.lista_cardapios} >
                    <Link href={"/detalhe_produto/" + produtoId}>
                    <img src={img} className={style.ex_card} alt="Link da imagem representada pelas imagens dos produtos" />
                    </Link>
                    <h4>{titulo}</h4>
                    <p>{descricao}</p>
                    <div className={style.botoes}>
                        <span>{formatarPreco(preco)}</span>
                        <Link href={"/historico/" + produtoId}><button><FontAwesomeIcon icon={faCircleInfo} className={style.icone_botao} /></button></Link>
                        <Link href={"/produto?id=" + produtoId}><button><FontAwesomeIcon icon={faPenToSquare} className={style.icone_botao}/></button></Link>
                        <button onClick={() => onDelete(produtoId)}><FontAwesomeIcon icon={faTrashCan}    className={style.icone_botao}/></button>
                    </div>
                </li>
    )
}

export default CardProduto;