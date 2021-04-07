// Style
import sGrid from '@btna/styles/grid.scss'

// Elements
import { Input } from '../elements'

// Components
import { CodeHighlight } from '../components'

// Helpers
import { classes as c } from '@btna/helpers'

// Code
export const Inputs = () => {
  return <div>
    <h1>Inputs</h1>

    <h3>Types</h3>
    <hr/>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Text Input</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Input type='text' value='Text Input' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Input type='text' value='Text Input'/>
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Textarea Input</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Input type='textarea' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Input type='textarea' />
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>File Input</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Input
  type='file'
  text='File Upload'
  textSelected='File: '
/>`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Input type='file' />
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Password Input</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Input type='password' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Input type='password' value='secret'/>
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Email Input</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Input type='email' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Input type='email' value='mail@example.com'/>
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Search Input</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Input type='search' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Input type='search' value='search'/>
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Tel Input</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Input type='tel' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Input type='tel' value='+1 555 55 55'/>
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>URL Input</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Input type='url' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Input type='url' placeholder='http://'/>
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Number Input</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Input type='number' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Input type='number'  defaultValue="5" min="0" max="10"/>
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Date Input</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Input type='date' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Input type='date'/>
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Month Input</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Input type='month' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Input type='month'/>
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Week Input</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Input type='week' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Input type='week'/>
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Time Input</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Input type='time' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Input type='time'/>
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Date Time Input</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Input type='datetime' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Input type='datetime'/>
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Color Input</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Input type='color' defaultValue='#000000' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Input type='color' defaultValue='#000000'/>
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Range Input</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Input
  type='range'
  defaultValue='0'
  min='0' max='100'
/>`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Input type='range' defaultValue='0' min='0' max='100' />
      </div>
    </div>


    <h3>Attributes</h3>
    <hr/>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Text Input with Label</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Input label='Label' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Input type='text' value='Text Input' label='Label' />
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Placeholder</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Input placeholder='placeholder'/>`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Input type='text' placeholder='placeholder'/>
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Readonly</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Input readOnly />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Input type='text' value='Read Only' readOnly/>
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Disabled</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Input disabled />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Input type='text' value='Disabled' disabled/>
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Required *</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Input required />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Input type='text' value='Required' required />
      </div>
    </div>


    <h3>Size</h3>
    <hr/>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Width - full</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Input width='full' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Input type='text' value='Full Text Input' width='full' />
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Width - px</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Input width={200} />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Input type='text' value='200px wide' width={200} />
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Width - full</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Input type='file' width='full' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Input type='file' width='full' text='Full File Upload' textSelected='File: ' />
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Width - wide</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Input type='file' width='wide' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Input type='file' width='wide' text='Wide File Upload' textSelected='File: ' />
      </div>
    </div>
  </div>
}