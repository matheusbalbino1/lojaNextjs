import Head from "next/head"
import SectionProdutos from "../../componentes/SectionProdutos"

export default function TodosProdutos() {
  return (
    <>
      <Head>
        <title>Todos os produtos!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SectionProdutos title="Todos os produtos"/>
    </>
  )
}
