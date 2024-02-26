import { elastic as Menu } from 'react-burger-menu' // mudando nome pra menu
import '../Navbar/Mobile.sass'

import {NavLinks} from './NavLinks'
import { NavButtons } from './NavButtons'
import {Logo} from '../../components/Logo/Logo'
import { string } from 'prop-types'

Mobile.propTypes = {
  extendProps: string.isRequired,
}

export function Mobile( { extendProps } ) {
  return (
    <div className={`${extendProps} container h-50`}>
      <Logo />
      <div className='relative h-30 w-30 px-xl'>
        <Menu width={400} right customBurgerIcon={<img src='/icons/burgerIcon.svg'/>}>
          <NavLinks className='flex-start-column gap-xl' />
          <NavButtons />
        </Menu>
      </div>
    </div>
  )
}