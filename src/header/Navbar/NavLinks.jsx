import { Link } from 'react-router-dom'
import './Mobile.sass'
import { propTypes } from 'react-bootstrap/esm/Image'
import {string} from 'prop-types'

NavLinks.propTypes = {
  className: string.isRequired,
}

export function NavLinks({ className }) {
  return (
    <div className={className}>
      <Link to='#' className='color-white font-sm hover dec-none'>
            Cartão
      </Link>
      <Link to='#' className='color-white font-sm hover dec-none'>
            Quem Somos
      </Link>
      <Link to='#' className='color-white font-sm hover dec-none'>
            FAQ
      </Link>
    </div>

  )
}