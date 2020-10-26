import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Link href={`/home`}>
      <a className="home-page">Click here to load SpaceX Launch Program</a>
    </Link>

  )
}
