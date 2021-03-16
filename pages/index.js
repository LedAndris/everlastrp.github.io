import styles from '../styles/Home.module.css'
import {btn} from '../styles/Global.module.css'

import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Welcome to EverlastRP</h1>
      <p className={styles.text}>Everlastrp is a new and innovative roleplay community that takes pride in providing quality roleplay. We are always working to wards making this place better and would love to have you join us!</p>
      <Link href="https://discord.gg/bDtPpfm3n5">
        <a className={btn}>Join our discord</a>
      </Link>
    </div>
  )
}
