// Packages
import React, { createRef, useState, useEffect } from 'react'

// Hooks
import { useOutsideClick } from '@btna/hooks'

// Helpers
import { classes as c } from '@btna/helpers'

export const Select =  React.forwardRef((props, ref) => {
  let { options, custom } = props
  let selectElement = createRef()
  let customMenu = createRef()
  let [selectedOption, setSelectedOption] = useState('please select')
  let [selectedIndex, setSelectedIndex] = useState(0)
  let [customMenuOpen, setCustomMenuOpen] = useState(false)

  // Handle Outside Click to Close custom menu
  useOutsideClick(customMenu, () => {
    setCustomMenuOpen(false)
  })

  // Run once to get selectedIndex to component
  useEffect(() => {
    setSelectedIndex(selectElement.current.selectedIndex)
  }, [])

  // Run everytime selectedIndex has changed
  useEffect(() => {
    let currentOptions = selectElement.current.options
    if (selectedIndex >= 0) {
      setSelectedOption(currentOptions[selectedIndex].text)
    }
  }, [selectedIndex])

  // Get selected index from native element
  const handleNativeOnChange = (e) => {
    setSelectedIndex(e.currentTarget.selectedIndex)
  }

  // Get selected index from custom option and set to relevant places
  const handleCustomOptionClick = (index) => {
    setSelectedIndex(index)
    selectElement.current.selectedIndex = index
  }

  // Menu Toggle
  const handleCustomMenuClick = () => {
    setCustomMenuOpen(!customMenuOpen)
  }

  // Generate options
  const genOptions = () => {
    return options.map((item, index) => {
      return <option key={index} value={item.value}>{item.name}</option>
    })
  }

  // Generate custom options
  const genCustomOptions = () => {
    return options.map((item, index) => {
      return <div
        key={index}
        className={props.cssModule.option}
        onClick={() => { handleCustomOptionClick(index) }}
      >
        {item.name}
      </div>
    })
  }

  // Render
  return (
    <div className={c(props.cssModule.select, [props.cssModule.custom, custom])} onClick={() => handleCustomMenuClick() }>
      <div className={props.cssModule.label}>{selectedOption}</div>
      <i className={c(props.iconModule['arrow_drop_down'], props.cssModule.icon)} />

      <select ref={selectElement} onChange={e => handleNativeOnChange(e) }>
        {genOptions()}
      </select>

      { custom && customMenuOpen &&
        <div className={props.cssModule.options} ref={customMenu}>
          {genCustomOptions()}
        </div>
      }
    </div>
  )
})
