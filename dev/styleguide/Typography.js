// Style
import s from './index.scss'
import sTypo from '@btna/styles/typography.scss'

// Helpers
import { classes as c } from '@btna/helpers'

// Code
export const Typography = () => {
  const genFonts = (name, list, style) => {
    return [100, 200, 300, 400, 500, 600, 700, 800, 900].map((item, index) => {
      return (
      <td
        key={index}
        style={{fontWeight: item, fontStyle: style}}
      >
        {list.includes(item) ? name : '-'}
      </td>
      )
    })
  }
  return <div>
    <h1>Typography</h1>
    <hr/>
    <h2>Fonts</h2>

    <table className={c(s.table)}>
      <thead>
        <tr>
          <th rowSpan='2'>Name</th>
          <th>100</th>
          <th>200</th>
          <th>300</th>
          <th>400</th>
          <th>500</th>
          <th>600</th>
          <th>700</th>
          <th>800</th>
          <th>900</th>
        </tr>
        <tr>
          <th>thin</th>
          <th>extra-light</th>
          <th>light</th>
          <th>regular</th>
          <th>medium</th>
          <th>semi-bold</th>
          <th>bold</th>
          <th>heavy</th>
          <th>black</th>
        </tr>
      </thead>
      <tbody>
        <tr className={sTypo.font_primary}>
          <td>Montserrat</td>
          {genFonts('Montserrat', [100, 200, 300, 400, 500, 600, 700, 900], 'regular')}
        </tr>
        <tr className={sTypo.font_primary}>
          <td>Montserrat Italic</td>
          {genFonts('Montserrat', [100, 200, 300, 400, 500, 600, 700, 900], 'italic')}
        </tr>
        <tr className={sTypo.font_mono}>
          <td>Roboto</td>
          {genFonts('Roboto', [100, 300, 400, 500, 700], 'regular')}
        </tr>
        <tr className={sTypo.font_mono}>
          <td>Roboto Italic</td>
          {genFonts('Roboto', [100, 300, 400, 500, 700], 'italic')}
        </tr>
      </tbody>
    </table>

    <h1>Heading 1 with <small>small text</small> and a <a href="#">link</a></h1>
    <h2>Heading 2 with <small>small text</small> and a <a href="#">link</a></h2>
    <h3>Heading 3 with <small>small text</small> and a <a href="#">link</a></h3>
    <h4>Heading 4 with <small>small text</small> and a <a href="#">link</a></h4>
    <h5>Heading 5 with <small>small text</small> and a <a href="#">link</a></h5>
    <h6>Heading 6 with <small>small text</small> and a <a href="#">link</a></h6>

    <article>
      <h1>Heading 1 (in article) with <small>small text</small> and a <a href="#">link</a></h1>
      <h2>Heading 2 (in article) with <small>small text</small> and a <a href="#">link</a></h2>
      <h3>Heading 3 (in article) with <small>small text</small> and a <a href="#">link</a></h3>
      <h4>Heading 4 (in article) with <small>small text</small> and a <a href="#">link</a></h4>
      <h5>Heading 5 (in article) with <small>small text</small> and a <a href="#">link</a></h5>
      <h6>Heading 6 (in article) with <small>small text</small> and a <a href="#">link</a></h6>
    </article>

    <section>
      <h1>Heading 1 (in section) with <small>small text</small> and a <a href="#">link</a></h1>
      <h2>Heading 2 (in section) with <small>small text</small> and a <a href="#">link</a></h2>
      <h3>Heading 3 (in section) with <small>small text</small> and a <a href="#">link</a></h3>
      <h4>Heading 4 (in section) with <small>small text</small> and a <a href="#">link</a></h4>
      <h5>Heading 5 (in section) with <small>small text</small> and a <a href="#">link</a></h5>
      <h6>Heading 6 (in section) with <small>small text</small> and a <a href="#">link</a></h6>
    </section>

    <h3>Text</h3>
    <p>The <a href="#">a element</a> example</p>
    <p>The <abbr>abbr element</abbr> and an <abbr title="Abbreviation">abbr</abbr> element with title examples</p>
    <p>The <b>b element</b> example</p>
    <p>The <cite>cite element</cite> example</p>
    <p>The <code>code element</code> example</p>
    <p>The <em>em element</em> example</p>
    <p>The <del>del element</del> example</p>
    <p>The <dfn>dfn element</dfn> and <dfn title="Title text">dfn element with title</dfn> examples</p>
    <p>The <i>i element</i> example</p>
    <p>The <ins>ins element</ins> example</p>
    <p>The <kbd>kbd element</kbd> example</p>
    <p>The <mark>mark element</mark> example</p>
    <p>The <q>q element</q> example</p>
    <p>The <q>q element <q>inside</q> a q element</q> example</p>
    <p>The <s>s element</s> example</p>
    <p>The <samp>samp element</samp> example</p>
    <p>The <small>small element</small> example</p>
    <p>The <span>span element</span> example</p>
    <p>The <strong>strong element</strong> example</p>
    <p>The <sub>sub element</sub> example</p>
    <p>The <sup>sup element</sup> example</p>
    <p>The <u>u element</u> example</p>
    <p>The <var>var element</var> example</p>
  </div>
}