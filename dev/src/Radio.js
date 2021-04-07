// Packages
import React, { createRef, useState, useEffect } from 'react'

// Hooks
import { useRadioChange } from '@btna/hooks'

// Helpers
import {
  classes as c
} from '@btna/helpers'

export const Radio = (props) => {
  let {
    name,
    value,
    children,
    center,
    hover,
    cssModule,
    defaultChecked
  } = props

  let id = name + '-' + value
  let nativeInput = createRef()
  let [isChecked, setIsChecked] = useState(false)

  // Sync native input with component 
  useEffect(() => {
    setIsChecked(nativeInput.current.checked)
  }, [])

  // Handle radio change with same name
  useRadioChange(nativeInput, () => {
    setIsChecked(nativeInput.current.checked)
  })

  // Render
  return (
    <div className={c(cssModule.radio, [cssModule.hover, hover])}>
      <div className={c(cssModule.box, [cssModule.center, center])}>
        { isChecked && <div className={c(cssModule.check)} />}
      </div>
      <label className={cssModule.label} htmlFor={id}>{children}</label>
      <input
        className={cssModule.native}
        type='radio'
        value={value}
        name={name}
        id={id}
        ref={nativeInput}
        defaultChecked={defaultChecked}
      />
    </div>
  )
}
