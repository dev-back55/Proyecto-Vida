
import styles from '@components/Hero.module.css'

export default function Hero() {
  return (
        <div className={styles.hero}>
                <div className={styles.imagen}>
                <Image
                    src="/image/plantar-arbol.jpg"
                    width={800}
                    height={500}
                    layout='responsive'
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
    
  )
}


