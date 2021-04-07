import React from 'react'

export const Avatar = ({cssModule}) => {
  if (cssModule === undefined) {
    return <div>Please pass CSS modules as props</div>
  } 
  
  return <div className={cssModule.avatar}>asdasd</div>
}
