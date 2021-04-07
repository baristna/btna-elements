// Style
import s from './NavBar.scss'

import Link from 'next/link';

// Elements
import {
  Button
} from '../elements'

// Helpers
import { classes as c } from '@btna/helpers'

// Default List
const defaultList = [
  {display: 'Home', url: '/'},
  {display: 'Style', url: '/styleguide'},
  {display: 'Time', url: '/time'}
]

// Code
export const NavBar = ({list}) => {
  let buttonList = list || defaultList
  const genButtons = () => (
    buttonList.map((item, index) => (

      <Link
        href={item.url}
        key={index}>
        <Button
          text={item.display}
          height='fill'
          type='ghost'
          width='wide'
          className={s.button}
        />
      </Link>
    ))
  )

  return (
    <div className={c(s.navbar)}>
      {genButtons()}
    </div>
  )
}
