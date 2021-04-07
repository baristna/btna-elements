// Style
import sGrid from '@btna/styles/grid.scss'

// Elements
import { Select } from '../elements'

// Components
import { CodeHighlight } from '../components'

// Helpers
import { classes as c } from '@btna/helpers'

// Code
export const SelectElements = () => {
  return <div>
    <h1>Select</h1>

    <h3>Types</h3>
    <hr/>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Select</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>
          {`<Select options={[
  {name: 'Option 0', value: 0},
  {name: 'Option 1', value: 1},
  {name: 'Option 2', value: 2}
]} />`}
        </CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Select
          options={[
            {name: 'Option 0', value: 0},
            {name: 'Option 1', value: 1},
            {name: 'Option 2', value: 2}
          ]}
        />
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Select (custom)</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>
          {`<Select custom />`}
        </CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Select
          custom
          options={[
            {name: 'Option 0', value: 0},
            {name: 'Option 1', value: 1},
            {name: 'Option 2', value: 2}
          ]}
        />
      </div>
    </div>
  </div>
}
