import { GiMagnifyingGlass as IconeLupa, GiSmartphone as IconeCelular, GiHearts as IconeCoracao } from "react-icons/gi"
import { GoThreeBars as IconeNavMobile } from "react-icons/go"
import { BsFillBagCheckFill as IconeSacola } from "react-icons/bs"
import { RiComputerFill as IconeComputador, RiCloseFill as IconeFechar } from "react-icons/ri"
import styles from "./styles.module.scss"
import Link from 'next/link'
import { useState } from "react"
import styled from "styled-components"

function HeaderMobile() {

    const [mostrarMenuMobile, setMostrarMenuMobile] = useState(false)

    function alternarMenu() {
        setMostrarMenuMobile(!mostrarMenuMobile)

    }
    return (
        <header className={styles.header}>
            <div>
                {
                    mostrarMenuMobile ?
                        <>
                            <nav>
                                <div>
                                    <Link href="#" ><a onClick={alternarMenu}>Entre ou cadastre-se</a></Link>
                                </div>
                                <div>
                                    <Link href="/todosprodutos" ><a onClick={alternarMenu}>Ver todos produtos</a></Link>
                                </div>
                                <div>

                                    <Link href="#"><a  onClick={alternarMenu}><IconeCoracao />Meus favoritos</a></Link>
                                </div>
                                <div>

                                    <Link href="#"><a  onClick={alternarMenu}><IconeCelular />Celular e Smartphone</a></Link>
                                </div>
                                <div>

                                    <Link href="#" ><a onClick={alternarMenu}><IconeComputador />Computadores</a></Link>
                                </div>
                                <IconeFechar className={styles.iconeFechar} onClick={alternarMenu} />
                            </nav>

                        </>
                        :
                        ""
                }

                <IconeNavMobile onClick={alternarMenu} className={styles.iconeNavMobile} />
                <Link href="/">
                    <a>
                        <h1>nomedaloja</h1>
                    </a>
                </Link>
                <IconeSacola className={styles.iconeSacola} />
            </div>
            <form className={mostrarMenuMobile ? "escurecer" : ""}>
                <input type="text" placeholder="Procure no nomedaloja" />
                <button type="submit">
                    <IconeLupa />
                </button>
            </form>
        </header>
    )
}
export default HeaderMobile