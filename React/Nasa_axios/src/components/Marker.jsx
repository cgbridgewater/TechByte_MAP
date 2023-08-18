import {Icon} from '@iconify/react'
import fireball from '@iconify/icons-fluent-emoji-flat/comet'

const Marker = ({ position, onClick }) => {
  return (
    <div className="LocationMarker" onClick={onClick}>
        <Icon icon={fireball} className="LocationIcon"/>
    </div>
  )
}

export default Marker