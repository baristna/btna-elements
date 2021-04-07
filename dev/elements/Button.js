import { Button } from '../src'
import sButton from '../../scss/Button.scss'
import sIcons from '@btna/styles/icons.scss'

export const ButtonComponent = React.forwardRef((props, ref) => (
  <Button cssModule={sButton} iconModule={sIcons} {...props} />
))

