import Head from 'next/head'
import Image from 'next/image'
import Mainmenu from "../Components/webpage";
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <Image src="/schoolimage.jpeg" alt='' width="1000" height="350"></Image>




      </main>
    </>
  )
}
