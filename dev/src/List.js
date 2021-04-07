import React from 'react'

export const List = ({type, list, cssModule}) => {
  const genList = (type, list) => {
    return list.map((item, index) => {
      let nest = null
      if (item.list) {
        switch (type) {
          case 'def':
            nest = <dd>{genList(type, item.list)}</dd>
            break;
          case 'ord':
            nest = <ol>{genList(type, item.list)}</ol>
            break;
          default:
            nest = <ul>{genList(type, item.list)}</ul>
            break;
        }
      }

      switch (type) {
        case 'def':
          return item.name ? <dt key={index}>{item.name}{nest}</dt> : nest
        default:
          return item.name ? <li key={index}>{item.name}{nest}</li> : nest
      }
    })
  }

  switch (type) {
    case 'def':
      return <dl>{genList(type, list)}</dl>
    case 'ord':
      return <ol>{genList(type, list)}</ol>
    default:
      return <ul>{genList(type, list)}</ul>
  }
}
