import Image from 'next/image'
import styles from './page.module.css'
import { Roboto } from 'next/font/google'
import Slider from '../../components/Slider'

const roboto = Roboto({ subsets: ['latin'], weight: ['400'],
})

export default function Home() {
  return (
    <main className={styles.main}>
      <Slider/>
    </main>
  )
}
