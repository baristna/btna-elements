// Style
import s from './icons.scss'
import sIcons from '@btna/styles/icons.scss'

// Packages
import { createRef, useState } from 'react'
import { Debounce } from 'react-throttle'

// Elements
import { Input } from '../elements'

// Helpers
import { classes as c } from '@btna/helpers'

// Data
import { icons as iconList } from '../public/fonts/icomoon/selection.json'

// Code
export const Icons = () => {
  let searchInput = createRef()
  let [filter, setFilter] = useState('')

  const filterIcons = (filter) => {
    return filter.length ? iconList.filter(item => item.properties.name.includes(filter)) : iconList
  }

  const genIcons = (filter) => {
    return filterIcons(filter).map((item, index) => {
      return <div className={c(s.col)} key={index}>
        <i className={c(s.icon, sIcons[item.properties.name])}></i>
        <input
          className={c(s.text, s.name)}
          value={item.properties.name}
          readOnly
          onClick={(e) => e.target.setSelectionRange(0, e.target.value.length)}
        />
        <input
          className={c(s.text, s.code)}
          value={`<i className={sIcons['${item.properties.name}']} />`}
          readOnly
          onClick={(e) => e.target.setSelectionRange(0, e.target.value.length)}
        />
      </div>
    })
  }

  const searchHandler = (e) => {
    setFilter(e.target.value)
  }

  return <div className={s.icons}>
      <div className={s.search}>
        <Debounce time='500' handler='onChange'>
          <Input
            type='text'
            widthRaw={'50%'}
            refHandle={searchInput}
            onChange={ searchHandler }
            placeholder='Search Icon'
          />
        </Debounce>
      </div>
      <div className={c(s.row)}>
        {genIcons(filter)}
      </div>
    </div>
}