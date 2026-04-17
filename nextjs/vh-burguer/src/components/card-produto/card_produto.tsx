import style from './cardProduto.module.css'

const CardProduto = () => {
    return(
         
                <li className={style.lista_cardapios}>
                    <img src="..    /imgs/" alt="" />
                    <h4>Monster</h4>
                    <p>Hambúrguer brutal, suculento e exageradamente saboroso.</p>
                    <span>R1 35,00</span>
                </li>
    )
}

export default CardProduto;