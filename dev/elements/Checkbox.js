import { Checkbox } from '../src'
import sCheckbox from '../../scss/Checkbox.scss'
import sIcons from '@btna/styles/icons.scss'

export const CheckboxComponent = (props) => (
  <Checkbox cssModule={sCheckbox} iconModule={sIcons} {...props} />
)
