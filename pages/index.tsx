import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from './components/header'
import TableView from './components/tableview'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header title="Password Manager"/>
    <TableView />
    </>
  )
}
