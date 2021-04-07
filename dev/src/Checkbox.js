// Packages
import React, { createRef, useState, useEffect } from 'react'

// Hooks
import { useCheckboxChange } from '@btna/hooks'

// Helpers
import {
  classes as c
} from '@btna/helpers'

export const Checkbox = (props) => {
  let {
    id,
    children,
    center,
    hover,
    defaultChecked,
    cssModule,
    iconModule
  } = props

  let nativeInput = createRef()
  let [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    setIsChecked(nativeInput.current.checked)
  }, [])

  // Handle radio change with same name
  useCheckboxChange(nativeInput, () => {
    setIsChecked(nativeInput.current.checked)
  })

  // Render
  return (
    <div className={c(cssModule.checkbox, [cssModule.hover, hover])}>
      <div className={c(cssModule.box, [cssModule.center, center])}>
        { isChecked && iconModule && <i className={c(iconModule['check'], cssModule.check)} />}
      </div>
      <label className={cssModule.label} htmlFor={id}>{children}</label>
      <input
        className={cssModule.native}
        type='checkbox'
        id={id}
        ref={nativeInput}
        defaultChecked={defaultChecked}
      />
    </div>
  )
}
