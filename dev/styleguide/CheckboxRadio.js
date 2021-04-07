// Style
import sGrid from '@btna/styles/grid.scss'

// Elements
import { Checkbox, Radio } from '../elements'

// Components
import { CodeHighlight } from '../components'

// Helpers
import { classes as c } from '@btna/helpers'

// Code
export const Checkboxradio = () => {
  return <div>
    <h1>Checkbox &amp; Radio</h1>

    <h3>Checkbox</h3>
    <hr/>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Checkbox</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Checkbox id='1' >Checkbox</Checkbox>`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Checkbox id='checkbox'>Checkbox</Checkbox>
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Default Checked</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Checkbox id='1' defaultChecked >Checkbox</Checkbox>`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Checkbox id='default-checked' defaultChecked >Default Checked</Checkbox>
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Hover</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Checkbox id='1' hover >Checkbox</Checkbox>`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Checkbox hover id='hover'>Checkbox</Checkbox>
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Long Text</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Checkbox id='1' >...long text...</Checkbox>`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Checkbox id='long-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis vero atque porro <a href="/" target='_blank'>Link</a></Checkbox>
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Center</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Checkbox id='1' center >...long text...</Checkbox>`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Checkbox center hover id='chk4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis vero atque porro <a href="/" target='_blank'>Link</a></Checkbox>
      </div>
    </div>

    <h3>Radio</h3>
    <hr/>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Radio</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Radio id='yes' name='radio' value='yes' >Yes</Radio>
<Radio id='no' name='radio' value='no' >No</Radio>`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Radio id='yes' name='radio' value='yes'>Yes</Radio>
        <Radio id='no' name='radio' value='no'>No</Radio>
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Default Checked</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Radio id='yes' name='radio' value='yes'defaultChecked >Yes</Radio>
<Radio id='no' name='radio' value='no'>No</Radio>`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Radio id='yes' name='radio2' value='yes' defaultChecked>Yes</Radio>
        <Radio id='no' name='radio2' value='no'>No</Radio>
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Hover</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Radio id='yes' name='radio' value='yes' hover >Yes</Radio>
<Radio id='no' name='radio' value='no' hover >No</Radio>`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Radio id='yes' name='radio3' value='yes' hover>Yes</Radio>
        <Radio id='no' name='radio3' value='no' hover>No</Radio>
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Long Text</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Radio id='yes' name='radio' value='yes' >...Long Text...</Radio>
<Radio id='no' name='radio' value='no'  >...Long Text...</Radio>`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Radio id='yes' name='radio4' value='yes' hover>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis vero atque porro</Radio>
        <Radio id='no' name='radio4' value='no' hover>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis vero atque porro</Radio>
      </div>
    </div>

    <div className={c(sGrid.row, sGrid.v_center)}>
      <div className={c(sGrid.col_3)}>
        <h4>Center</h4>
      </div>
      <div className={c(sGrid.col, sGrid.col_grow)}>
        <CodeHighlight>{`<Radio id='yes' name='radio' value='yes' center >...Long Text...</Radio>
<Radio id='no' name='radio' value='no' center >...Long Text...</Radio>`}</CodeHighlight>
      </div>
      <div className={c(sGrid.col_3, sGrid.col_h_center)}>
        <Radio id='yes' name='radio5' value='yes' center>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis vero atque porro</Radio>
        <Radio id='no' name='radio5' value='no' center>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis vero atque porro</Radio>
      </div>
    </div>
  </div>
}