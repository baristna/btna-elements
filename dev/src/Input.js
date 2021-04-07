// Packages
import React, { useState } from 'react'

// Elements
import { Button } from './'

// Helpers
import { classes as c } from '@btna/helpers'

// genProps
const genProps = (props) => {
  let {
    type,
    name,
    value,
    placeholder,
    readOnly,
    disabled,

    widthRaw,
    width,

    onKeyPress,
    onKeyDown,
    onKeyUp,
    onChange,
    refHandle,
    cssModule
  } = props

  // Gen Props
  const genClass = c(
    [cssModule.input, type != 'textarea'],
    [cssModule.textarea, type == 'textarea'],
    [cssModule['width_' + width], (width && typeof width === 'string')],
  )

  const genStyles = {
    ...(width && (typeof width == 'number') ? {width : width + 'px'} : null),
    ...(widthRaw ? {width : widthRaw } : null),
  }

  return {
    className: genClass,
    style: genStyles,
    name: name,
    type:type || text,
    placeholder:placeholder,
    defaultValue:value,
    readOnly:readOnly,
    disabled:disabled,
    onKeyPress:onKeyPress,
    onKeyDown:onKeyDown,
    onKeyUp:onKeyUp,
    onChange:onChange,
    ref:refHandle
  }
}

export const InputWrapper = ({children, label}) => {
  switch (label && label.length > 0) {
    case true:
      return <div>
        <div>{label}</div>
        {children}
      </div>
  
    default:
      return children
  }
}

// Code
export const Input = (props) => {
  let [selectedFiles, setSelecedFiles] = useState('')

  const fileInputChange = (e) => {
    setSelecedFiles(e.currentTarget.files[0].name)
  }

  switch (props.type) {
    case 'file':
      return (
        <Button className={c(props.cssModule.file)} cssModule={props.buttonModule} width={props.width}>
          {selectedFiles ? (props.textSelected || 'File: ') + selectedFiles : (props.text || 'File Upload') }
          <input
            onChange={(e) => fileInputChange(e) }
            {...genProps(props)}
          />
        </Button>
      )
    case 'textarea':
      return <InputWrapper label={props.label}><textarea {...genProps(props)} /></InputWrapper>
    default:
      return (
        <InputWrapper label={props.label}><input {...genProps(props)} /></InputWrapper>
      )
  }
}


