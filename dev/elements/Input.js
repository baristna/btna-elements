import { Input } from '../src'
import sInput from '../../scss/Input.scss'
import sButton from '../../scss/Button.scss'

export const InputComponent = (props) => (
  <Input {...props} cssModule={sInput} buttonModule={sButton} />
)
