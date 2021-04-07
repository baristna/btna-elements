// Style
import s from './Panel.scss'

// Helpers
import { classes as c } from '@btna/helpers'

// Code
export const Panel = ({children, className, leftPanel}) => {
  return <div className={c(s.panel, className)}>
    <div className={c(s.left)}>{leftPanel}</div>
    <div className={c(s.content)}>{children}</div>
  </div>
}
