import {Icon} from '@iconify/react'
import fireball from '@iconify/icons-fluent-emoji-flat/comet'

const Header = () => {
  return (
    <header className="Header">
        <h1 className='HeaderFireball'><Icon  icon={fireball}/></h1>
        <h1>Fireball - Meteorite Tracker </h1>
        <h3 className='HeaderNasa'>(Powered by NASA)</h3>
        <img className='NasaLogo' src="https://gpm.nasa.gov/themes/pmm_bs/images/nasa-logo-large-v1.png" alt="Nasa Logo" />
    </header>
  )
}

export default Header