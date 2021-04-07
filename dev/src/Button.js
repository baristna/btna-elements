// Package
import React from 'react'
import Link from 'next/link'

// Helpers
import {
  classes as c,
  capitalize
} from '@btna/helpers'

// Code
export const Button = React.forwardRef((props, ref) => {
  let {
    tag,
    className,
    cssModule,
    iconModule,
    children,
    text,
    type,
    size,
    width,
    height,
    icon,
    iconPos,
    iconSize,
    noshadow,
    round,
    justify,
    onClick
  } = props

  // Set defaults
  if (!type) {
    type = 'primary'
  }
  if (!iconPos) {
    iconPos = 'start'
  }

  // Icon configuration
  const genIcon = (side) => {
    return <i
      className={c(
        cssModule.icon,
        iconModule[icon]
      )}
      style={{
        ...(text ? {['margin' + capitalize(side) ]: '5px'} : null),
        ...(iconSize ? {fontSize : iconSize + 'px'} : null)
      }}
    />
  }

  // ClassNames
  const genClass = c(
    cssModule.button,
    [cssModule['type_' + type], type],
    [cssModule['size_' + size], size],
    [cssModule['width_' + width], (width && typeof width === 'string')],
    [cssModule['height_' + height], (height && typeof height === 'string')],
    [cssModule['just_' + justify], justify],
    [cssModule.noshadow, noshadow],
    [cssModule.square, !text && !children],
    [cssModule.round, round],
    className
  )

  // Styles
  const genStyles = {
    ...(width && (typeof width == 'number') ? {width : width + 'px'} : null),
  }

  // Gen Props
  const genProps = {
    onClick,
    className: genClass,
    style: genStyles
  }

  // Button Inner
  const genInner = <span className={c(cssModule.inner)}>
    { icon && iconPos == 'start' && genIcon('right')}
    { children || text }
    { icon && iconPos == 'end' && genIcon('left') }
  </span>


  switch (tag) {
    case 'a':
      return <a {...genProps}>{ genInner }</a>
    case 'link':
      return <Link href={props.href}>
        <div {...genProps}>{ genInner }</div>
      </Link>
    default:
      return <div {...genProps}>{ genInner }</div>
  }
})
