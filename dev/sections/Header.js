// Style
import s from './Header.scss'

// Helpers
import { classes as c } from '@btna/helpers'

// Code
export const Header = ({corner, className, navbar}) => {
  return <div className={c(s.header, className)}>
    <div className={s.logo}>TNA Elements</div>
    <div className={s.bar}>{navbar}</div>
    <div className={s.divider} />
    <div className={s.corner}>{corner}</div>
  </div>
}
