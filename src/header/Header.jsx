import '../header/Header.sass' // não reconheceu que existe
import { Mobile } from './Navbar/Mobile'
import { Desktop } from './Navbar/Desktop'

export function Header() {
  return (
    <header className="w-full bg-purple-200 py-sm">
      <Mobile extendProps='menuMobile flex-space-between' />
      <Desktop extendProps='menuDesktop grid-columns' />
    </header>
  )
}