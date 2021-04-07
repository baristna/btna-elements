// Styles
import s from './ListMenu.scss'

// Packages
import Link from 'next/link';
import { createRef, useState } from 'react'

// Elements
import { Button } from '../elements'

// Helpers
import { classes as c, urlParse } from '@btna/helpers'

const isActive = (item, queryTarget, active) => {
  return item.target && urlParse(item.target) && urlParse(item.target).query && (urlParse(item.target).query[queryTarget] == active)
}

const isChildActive = (list, queryTarget, active) => {
  if (list && list.length) { 
    for (let i=0; i<list.length; i++) {
      let item = list[i]
      if (isActive(item, queryTarget, active)) {
        return true
      } else if (item.child) {
        return isChildActive(item.child, queryTarget, active)
      }
    }
  }
}


const DistItems = (props) => {
  let { list, queryTarget, active } = props
  return (
    list.map((item, index) => {
      const activeCheck = isActive(item, queryTarget, active)
      return (
        <div
          key={index}
          className={c(s.item)}
        >
          {
            item.target && 
            <Link href={item.target}>
              <Button
                type={activeCheck ? 'primary' : 'ghost' }
                width='full'
                justify='between'
                text={item.name}
                noshadow={activeCheck}
                icon={activeCheck ? 'keyboard_arrow_right' : null}
                iconPos='end'
                iconSize={20}
              />
            </Link>
          }
          { item.child && <DistGroup item={item} active={active} queryTarget={queryTarget} /> }
        </div>
      )
    })
  )
}

const DistGroup = (props) => {
  let { item, queryTarget, active } = props

  const [isOpen, setIsOpen] = useState(isChildActive(item.child, queryTarget, active))
  let content = createRef()

  return <div>
    <Button
      type='ghost'
      width='full'
      justify='between'
      icon={isOpen ? 'keyboard_arrow_down' : 'keyboard_arrow_right'}
      iconPos='end'
      iconSize={20}
      text={item.name}
      onClick={() => {
        setIsOpen(!isOpen)
      }}
    />
    <div className={c(s.group, [s.is_open, isOpen])} ref={content}>
      <DistItems list={item.child} active={active} queryTarget={queryTarget} />
    </div>
  </div>
}

export const ListMenu = (props) => {
  let {list, query, queryTarget, queryDefault} = props
  let active = (query && query[queryTarget]) || queryDefault || ''

  return <div className={c(s.listmenu)}>{<DistItems list={list} active={active} queryTarget={queryTarget} />}</div>
}
