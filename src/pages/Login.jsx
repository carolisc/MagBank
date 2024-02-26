import './Login.sass'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <main className="login-bg-color color-white w-full h-max grid-center gap-xl font-lg">
      Login
      {/* <a href="#" className="color-white">
        Voltar
      </a> */}
      <Link to='/'>Voltar</Link> {/*não usar o A pra não recarregar, lembra que precisa importar o Link*/}
    </main>
  )
}