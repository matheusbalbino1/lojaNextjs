import styles from "./styles.module.scss"
import Link from "next/link"

function SectionProdutos(props) {
    return (
        <section className={styles.sectionOfertasDoDia}>
            <h2>{props.title}</h2>
            <article>
                <Link href="#">
                    <a>
                        <img src="https://a-static.mlcdn.com.br/450x450/cortina-roma-para-sala-e-quarto-400-x-250-admirare/guarucasa2/15809091994/3d8b15bcca50b935a8bae58882c8fb4c.jpg" alt="" />
                        <p>cortina-roma-para-sala-e-quarto-400-x-250-admirare</p>
                        <p>R$500,00</p>
                        <p>R$500,00</p>
                        <p>ou 10x de R$ 70 sem juros</p>
                    </a>
                </Link>
                <Link href="#">
                    <a>
                        <img src="https://a-static.mlcdn.com.br/450x450/cortina-roma-para-sala-e-quarto-400-x-250-admirare/guarucasa2/15809091994/3d8b15bcca50b935a8bae58882c8fb4c.jpg" alt="" />
                        <p>cortina-roma-para-sala-e-quarto-400-x-250-admirare</p>
                        <p>R$500,00</p>
                        <p>R$500,00</p>
                        <p>ou 10x de R$ 70 sem juros</p>
                    </a>
                </Link>
                <Link href="#">
                    <a>
                        <img src="https://a-static.mlcdn.com.br/450x450/cortina-roma-para-sala-e-quarto-400-x-250-admirare/guarucasa2/15809091994/3d8b15bcca50b935a8bae58882c8fb4c.jpg" alt="" />
                        <p>cortina-roma-para-sala-e-quarto-400-x-250-admirare</p>
                        <p>R$500,00</p>
                        <p>R$500,00</p>
                        <p>ou 10x de R$ 70 sem juros</p>
                    </a>
                </Link>
                <Link href="#">
                    <a>
                        <img src="https://a-static.mlcdn.com.br/450x450/cortina-roma-para-sala-e-quarto-400-x-250-admirare/guarucasa2/15809091994/3d8b15bcca50b935a8bae58882c8fb4c.jpg" alt="" />
                        <p>cortina-roma-para-sala-e-quarto-400-x-250-admirare</p>
                        <p>R$500,00</p>
                        <p>R$500,00</p>
                        <p>ou 10x de R$ 70 sem juros</p>
                    </a>
                </Link>
            </article>
        </section>
    )
}
export default SectionProdutos