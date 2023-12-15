import Image from 'next/image'
import styles from './page.module.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['400'],
})

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.imagen}>
        <Image
          src="/image/plantar-arbol.jpg"
          width={900}
          height={600}
          alt="Picture of the author"
        />

        </div>
        <div className={styles.titulo}>
          <p className={`${roboto.className}`}>
          La ciudad de Rawson, ubicada en la provincia de Chubut, enfrenta diversos desafíos ambientales.
          Este proyecto propone un plan integral de forestación para la ciudad, con el objetivo de aumentar la cobertura vegetal, promover la biodiversidad y mejorar la estética urbana.
          </p>
        </div>
      </div>
    </main>
  )
}
