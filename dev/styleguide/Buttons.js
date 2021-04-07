// Style
import sGrid from '@btna/styles/grid.scss'

// Elements
import { Button } from '../elements'

// Components
import { CodeHighlight } from '../components'

// Helpers
import { classes as c } from '@btna/helpers'

// Code
export const Buttons = () => {
  const parentFunction = () => {
    console.log('Parent Click')
  }

  return <div>
    <h1>Buttons</h1>

    <h3>Types</h3>
    <hr/>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Primary Button</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Button text='Button Text' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Button text='Button Text' />
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Secondary Button</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Button type='secondary' text='Button Text' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Button type='secondary' text='Button Text' />
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Ghost Button</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Button type='ghost' text='Button Text' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Button type='ghost' text='Button Text' />
      </div>
    </div>

    <h2>Size</h2>
    <hr/>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Big Button</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Button text='Button Text' size='big' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Button text='Button Text' size='big' />
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Small Button</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Button text='Button Text' size='small' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Button text='Button Text' size='small' />
      </div>
    </div>

    <h2>Width / Height</h2>
    <hr/>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Wide Button</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Button text='Button Text' width='wide' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Button text='Button Text' width='wide' />
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Extra Button</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Button text='Button Text' width='extra' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Button text='Button Text' width='extra' />
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Full Button</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Button text='Button Text' width='full' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Button text='Button Text' width='full' />
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Custom Width</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Button text='Button Text' width={200} />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Button text='Button Text' width={200} />
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Height (height: 100%)</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Button text='Button Text' height='fill' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Button text='Button Text' height='fill' />
      </div>
    </div>

    <h2>Icon</h2>
    <hr/>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Icon</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Button text='Button Text' icon='home' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Button text='Button Text' icon='home' />
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Icon Position</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Button text='Button Text' icon='home' iconPos='end' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Button text='Button Text' icon='home' iconPos='end' />
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Icon Size</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Button text='Button Text' icon='home' iconSize={25} />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Button text='Button Text' icon='home' iconSize={25} />
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Icon Button</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Button type='primary' icon={'home'} iconSize={25} />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Button type='primary' icon={'home'} iconSize={25} />
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Icon Button</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Button
  type='primary'
  icon={'home'}
  iconSize={25}
  round
/>`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Button type='primary' icon={'home'} iconSize={25} round />
      </div>
    </div>

    <h2>Tags</h2>
    <hr/>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>A Button (for direct routing</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Button text='Button Text' tag='a' />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Button text='Button Text' tag='a' />
      </div>
    </div>

    <h2>Others</h2>
    <hr/>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Justify</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Button
  text='Button Text' width='full'
  justify='between' icon={'home'}
/>`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Button text='Button Text' width='full' justify='between' icon={'home'} />
      </div>
    </div>
    <hr/>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Multiple Property</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Button
  text='Button Text'
  type='secondary'
  width={150}
  size='big'
  icon={'home'}
  iconPos='end'
  iconSize={35}
/>`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Button text='Button Text' type='secondary' width={150} size='big' icon={'home'} iconPos='end' iconSize={35} />
      </div>
    </div>
    <hr/>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>No Shadow</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Button text='Button Text' noshadow />`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Button text='Button Text' noshadow />
      </div>
    </div>
    <hr/>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>onClick</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Button
  onClick={() => {parentFunction()}} text='onClick'
/>`}</CodeHighlight></div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Button onClick={() => {parentFunction()}} text='onClick' />
      </div>
    </div>
    <hr/>

  </div>
}