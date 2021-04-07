import { List } from '../src'
import sList from '../../scss/List.scss'

export const ListComponent = React.forwardRef((props, ref) => (
  <List cssModule={sList} {...props} />
))
