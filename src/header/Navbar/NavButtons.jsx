import { Button, ButtonGroup } from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {string} from 'prop-types'
import { useNavigate } from 'react-router-dom'

NavButtons.propTypes = {
  className: string,
}

export function NavButtons({ className }) {
  const navigate = useNavigate()

  function handleNavigate(path) {
    navigate(path, {preventScrollReset: true})
  }

  return (
    <div>
      <ButtonGroup>
        <Button 
          variant='outline-light' 
          className='p-sm font-xs'>
          <NavDropdown title="Acessar minha conta" id="basic-nav-dropdown">
            <NavDropdown.Item onClick={() => handleNavigate('./')} >Conta corrente</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleNavigate('./')} >
                Pagamento
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleNavigate('./')} >Extrato</NavDropdown.Item>
          </NavDropdown>
        </Button>
        <Button 
          variant='outline-light' 
          className='p-sm font-xs'
          onClick={() => handleNavigate('./login')}
        >
            Abra sua conta
        </Button>
      </ButtonGroup>
    </div>
  )
}