import { Select } from '../src'
import sSelect from '../../scss/Select.scss'
import sIcons from '@btna/styles/icons.scss'

export const SelectComponent = React.forwardRef((props, ref) => (
  <Select cssModule={sSelect} iconModule={sIcons} {...props} />
))
