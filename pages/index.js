import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Link href={`/home`}>
      <a>Click me</a>
    </Link>
  )
}
