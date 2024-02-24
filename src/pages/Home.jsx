import { useContext } from "react"
import { ThemeContext } from '../contexts/ThemeContext'
import { Header } from "../header/Header"

export default function Home() {
  const { theme } = useContext(ThemeContext)
  const bgColor = theme === 'dark' ? 'dark-theme' : 'light-theme'

  return (
    <main className='dark-theme h-max'>
      <Header />
    </main>
  )
}