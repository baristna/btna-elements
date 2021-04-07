// Style
import s from './Tabs.scss'

// Packag
import Link from 'next/link';
import { createRef, useState, useEffect } from 'react'

// Helpers
import { classes as c } from '@btna/helpers'

// Code
export const Tabs = ({tabs, className, classNames, defaultTab }) => {
  let bodyElement = createRef()

  const [selectedTab, setTab] = useState(defaultTab % tabs.length || 0)
  const [bodyHeight, changeBodyHeight] = useState(0)

  useEffect(() => {
    let targetHeight = bodyElement.current.children[selectedTab].offsetHeight
    changeBodyHeight(targetHeight)
  })

  const changeTab = (e) => {
    for (var i=0; i<e.currentTarget.children.length; i++) {
      if (e.currentTarget.children[i] == e.target) {
        setTab(i)
      }
    }
  }

  const tabStyle = () => {
    return {
      marginLeft: selectedTab ? ('-' + (selectedTab * 100) + '%') : 0,
      height: bodyHeight + 'px'
    }
  }

  const genButtons = () => {
    return tabs.map((item, index) => {
      return <div key={index} className={s.button}>{item.name}</div>
    })
  }

  const genTabContents = () => {
    return tabs.map((item, index) => {
      return <div key={index} className={c(s.content, classNames && classNames.content)}>{item.content}</div>
    })
  }

  return (
    <div className={c(s.tabs, className)}>
      <div className={s.head} onClick={(e) => { changeTab(e) }}>
        {genButtons()}
      </div>

      <div className={c(s.body, s.dynamic)} ref={bodyElement} style={tabStyle()}>
        {genTabContents()}
      </div>
    </div>
  )
}
