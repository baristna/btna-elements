// Style
import s from './index.scss'

// Helpers
import { classes as c } from '@btna/helpers'

// Code
export const Base = () => {
  return <div>
    <h3>adress</h3>
    <address>
      Company Name, Inc.<br/>
      811 7th Ave, Suite 700<br/>
      Manhattan, NY 10019<br/>
      USA
    </address>

    <h3>blockquote</h3>
    <blockquote>
      <p>Some sort of famous witty quote marked up with a &lt;blockquote> and a child &lt;p> element.</p>
    </blockquote>
    <blockquote>Even better philosophical quote marked up with just a &lt;blockquote> element.</blockquote>

    <h3>details</h3>
    <details open>
      <summary>More info</summary>
      <div>
        <p>Additional information</p>
        <ul>
          <li>Point 1</li>
          <li>Point 2</li>
        </ul>
      </div>
    </details>
    <details>
      <summary>More info</summary>
      <div>
        <p>Additional information</p>
        <ul>
          <li>Point 1</li>
          <li>Point 2</li>
        </ul>
      </div>
    </details>
    <details>
      <summary>More info</summary>
      <div>
        <p>Additional information</p>
        <ul>
          <li>Point 1</li>
          <li>Point 2</li>
        </ul>
      </div>
    </details>

    <h3>figure</h3>
    <figure>
      <img src="http://placehold.it/240x240" alt="Image alt text 1" />
      <figcaption>Figcaption content</figcaption>
    </figure>

    <figure>
      <img src="http://placehold.it/240x240" alt="Image alt text 2" />
      <figcaption>
        <h4>Figure Title</h4>
        Figcaption content
      </figcaption>
    </figure>
  </div>
}