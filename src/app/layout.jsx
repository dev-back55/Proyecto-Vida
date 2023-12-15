import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../../components/Navbar'
import style from './footer.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Proyecto Vida',
  description: 'Proyecto de Forestación para Rawson capital del Chubut',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <footer>
          <div className={style.container_footer}>

          Proyecto Vida, desarrollado con ❤️​ por Horacio Abitú - © 2023 ALL RIGHTS RESERVED
          </div>
        </footer>
      </body>
    </html>
  )
}
