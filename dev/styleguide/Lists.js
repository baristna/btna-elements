// Style
import s from './Lists.scss'
import sGrid from '@btna/styles/grid.scss'

// Elements
import { List } from '../elements'

// Components
import { CodeHighlight } from '../components'

// Helpers
import { classes as c } from '@btna/helpers'

// Code
export const Lists = () => {
  const listData = [
    { name: 'level1-1' },
    {
      name: 'level1-2',
      list: [
        { name: 'level2-1' },
        {
          name: 'level2-2',
          list: [
            { name: <span>level3 <a href='/styleguide?cat=lists'>link</a></span> },
          ]
        },
        { name: 'level2-3' },
      ]
    },
    { name: 'level1-3' },
  ]

  return <div>

    <h1>List</h1>
    <h3>Types</h3>
    <hr/>

    <div className={c(sGrid.row)}>
      <div className={c(sGrid.col_3)}>
        <h4>Default</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <h4><CodeHighlight>{`<List list={sampleData} />`}</CodeHighlight></h4>
      </div>
      <div className={c(sGrid.col_3)}>
        <hr />
        <List list={listData} />
        <hr />
      </div>
    </div>

    <hr/>

    <div className={c(sGrid.row)}>
      <div className={c(sGrid.col_3)}>
        <h4>Ordered</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <h4><CodeHighlight>{`<List type='ord' list={sampleData} />`}</CodeHighlight></h4>
      </div>
      <div className={c(sGrid.col_3)}>
        <hr />
        <List type='ord' list={listData} />
        <hr />
      </div>
    </div>

    <hr/>
    <h3>Sample Data</h3>
    <CodeHighlight>{JSON.stringify([{name:'level1-1'}, {name:'level1-2', list:[{name:'level2-1'}]}], true, 2).replace(/\"([^(\")"]+)\":/g,"$1:")}</CodeHighlight>
  </div>
}