import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'
import { IChildren } from "../types/index";

export default function Layout({ children }: IChildren) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>Rick&Morty</title>
      </Head>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  )
}
