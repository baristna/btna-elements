// Style
import s from './Grid.scss'
import sGrid from '@btna/styles/grid.scss'

// Helpers
import { classes as c } from '@btna/helpers'

// Code
export const Grid = () => {
  return <div>
    <h1>Grid</h1>

    <div className={c(s.border, sGrid.section)}>Section</div>
      <hr/>
      <div className={c(s.border, sGrid.container)}>Container</div>
      <hr/>
      <div className={c(sGrid.container)}>
        <div className={c(sGrid.row)}>
          <div className={c(s.outline, sGrid.col, sGrid.col_12)}>col-12</div>
        </div>
        <div className={c(sGrid.row)}>
          <div className={c(s.outline, sGrid.col, sGrid.col_1)}>col-1</div>
          <div className={c(s.outline, sGrid.col, sGrid.col_11)}>col-11</div>
        </div>
        <div className={c(sGrid.row)}>
          <div className={c(s.outline, sGrid.col, sGrid.col_2)}>col-2</div>
          <div className={c(s.outline, sGrid.col, sGrid.col_10)}>col-10</div>
        </div>
        <div className={c(sGrid.row)}>
          <div className={c(s.outline, sGrid.col, sGrid.col_3)}>col-3</div>
          <div className={c(s.outline, sGrid.col, sGrid.col_9)}>col-9</div>
        </div>
        <div className={c(sGrid.row)}>
          <div className={c(s.outline, sGrid.col, sGrid.col_4)}>col-4</div>
          <div className={c(s.outline, sGrid.col, sGrid.col_8)}>col-8</div>
        </div>
        <div className={c(sGrid.row)}>
          <div className={c(s.outline, sGrid.col, sGrid.col_5)}>col-5</div>
          <div className={c(s.outline, sGrid.col, sGrid.col_7)}>col-7</div>
        </div>
        <div className={c(sGrid.row)}>
          <div className={c(s.outline, sGrid.col, sGrid.col_6)}>col-6</div>
          <div className={c(s.outline, sGrid.col, sGrid.col_6)}>col-6</div>
        </div>
        <div className={c(sGrid.row)}>
          <div className={c(s.outline, sGrid.col, sGrid.col_grow)}>col</div>
          <div className={c(s.outline, sGrid.col)}>col</div>
        </div>

      </div>


      <hr/>
      <div className={c(sGrid.container)}>
      .row.v_start
        <div className={c(sGrid.row, sGrid.v_start)}>
          <div className={c(s.outline, sGrid.col, sGrid.col_3)}>col-3</div>
          <div className={c(s.outline, sGrid.col, sGrid.col_3)}>
            Aliqua laborum id eu proident do sunt sint esse eiusmod qui.
            Irure nostrud ipsum consectetur ullamco tempor nisi enim sunt nulla elit.
          </div>
          <div className={c(s.outline, sGrid.col, sGrid.col_3)}>col-3</div>
          <div className={c(s.outline, sGrid.col, sGrid.col_3)}>col-3</div>
        </div>
      </div>

      <hr/>
      <div className={c(sGrid.container)}>
      .row.v_center
        <div className={c(sGrid.row, sGrid.v_center)}>
          <div className={c(s.outline, sGrid.col, sGrid.col_3)}>col-3</div>
          <div className={c(s.outline, sGrid.col, sGrid.col_3)}>
            Aliqua laborum id eu proident do sunt sint esse eiusmod qui.
            Irure nostrud ipsum consectetur ullamco tempor nisi enim sunt nulla elit.
          </div>
          <div className={c(s.outline, sGrid.col, sGrid.col_3)}>col-3</div>
          <div className={c(s.outline, sGrid.col, sGrid.col_3)}>col-3</div>
        </div>
      </div>

      <hr/>
      <div className={c(sGrid.container)}>
      .row.v_end
        <div className={c(sGrid.row, sGrid.v_end)}>
          <div className={c(s.outline, sGrid.col, sGrid.col_3)}>col-3</div>
          <div className={c(s.outline, sGrid.col, sGrid.col_3)}>
            Aliqua laborum id eu proident do sunt sint esse eiusmod qui.
            Irure nostrud ipsum consectetur ullamco tempor nisi enim sunt nulla elit.
          </div>
          <div className={c(s.outline, sGrid.col, sGrid.col_3)}>col-3</div>
          <div className={c(s.outline, sGrid.col, sGrid.col_3)}>col-3</div>
        </div>
      </div>


      <hr/>
      <div className={c(sGrid.container)}>
      .col_v_start / .col_v_center / .col_v_end
        <div className={c(sGrid.row)}>
          <div className={c(s.outline, sGrid.col, sGrid.col_3, sGrid.col_v_start)}>.col-3.col_v_start</div>
          <div className={c(s.outline, sGrid.col, sGrid.col_3)}>
            Aliqua laborum id eu proident do sunt sint esse eiusmod qui.
            Irure nostrud ipsum consectetur ullamco tempor nisi enim sunt nulla elit.
            Officia irure qui occaecat nostrud ut voluptate amet culpa laboris eiusmod commodo fugiat.
            In elit velit ex sunt deserunt mollit sunt anim.
            Quis nostrud excepteur enim eu duis ea consectetur ad Lorem excepteur.
          </div>
          <div className={c(s.outline, sGrid.col, sGrid.col_3, sGrid.col_v_center)}>.col-3.col_v_center</div>
          <div className={c(s.outline, sGrid.col, sGrid.col_3, sGrid.col_v_end)}>.col-3.col_v_end</div>
        </div>
      </div>

      <hr/>
      <div className={c(sGrid.container)}>
      .row.h_start
        <div className={c(sGrid.row, sGrid.h_start)}>
          <div className={c(s.outline, sGrid.col, sGrid.col_3)}>
            Aliqua laborum id eu proident do sunt sint esse eiusmod qui.
            Irure nostrud ipsum consectetur ullamco tempor nisi enim sunt nulla elit.
          </div>
          <div className={c(s.outline, sGrid.col, sGrid.col_3)}>
            Aliqua laborum id eu proident do sunt sint esse eiusmod qui.
            Irure nostrud ipsum consectetur ullamco tempor nisi enim sunt nulla elit.
          </div>
        </div>
      </div>

      <hr/>
      <div className={c(sGrid.container)}>
      .row.h_center
        <div className={c(sGrid.row, sGrid.h_center)}>
          <div className={c(s.outline, sGrid.col, sGrid.col_3)}>
            Aliqua laborum id eu proident do sunt sint esse eiusmod qui.
            Irure nostrud ipsum consectetur ullamco tempor nisi enim sunt nulla elit.
          </div>
          <div className={c(s.outline, sGrid.col, sGrid.col_3)}>
            Aliqua laborum id eu proident do sunt sint esse eiusmod qui.
            Irure nostrud ipsum consectetur ullamco tempor nisi enim sunt nulla elit.
          </div>
        </div>
      </div>

      <hr/>
      <div className={c(sGrid.container)}>
      .row.h_end
        <div className={c(sGrid.row, sGrid.h_end)}>
          <div className={c(s.outline, sGrid.col, sGrid.col_3)}>
            Aliqua laborum id eu proident do sunt sint esse eiusmod qui.
            Irure nostrud ipsum consectetur ullamco tempor nisi enim sunt nulla elit.
          </div>
          <div className={c(s.outline, sGrid.col, sGrid.col_3)}>
            Aliqua laborum id eu proident do sunt sint esse eiusmod qui.
            Irure nostrud ipsum consectetur ullamco tempor nisi enim sunt nulla elit.
          </div>
        </div>
      </div>

      <hr/>
      <div className={c(sGrid.container)}>
      .row.h_between
        <div className={c(sGrid.row, sGrid.h_between)}>
          <div className={c(s.outline, sGrid.col, sGrid.col_3)}>
            Aliqua laborum id eu proident do sunt sint esse eiusmod qui.
            Irure nostrud ipsum consectetur ullamco tempor nisi enim sunt nulla elit.
          </div>
          <div className={c(s.outline, sGrid.col, sGrid.col_3)}>
            Aliqua laborum id eu proident do sunt sint esse eiusmod qui.
            Irure nostrud ipsum consectetur ullamco tempor nisi enim sunt nulla elit.
          </div>
        </div>
      </div>

      <hr/>
      <div className={c(sGrid.container)}>
      .row.h_around
        <div className={c(sGrid.row, sGrid.h_around)}>
          <div className={c(s.outline, sGrid.col, sGrid.col_3)}>
            Aliqua laborum id eu proident do sunt sint esse eiusmod qui.
            Irure nostrud ipsum consectetur ullamco tempor nisi enim sunt nulla elit.
          </div>
          <div className={c(s.outline, sGrid.col, sGrid.col_3)}>
            Aliqua laborum id eu proident do sunt sint esse eiusmod qui.
            Irure nostrud ipsum consectetur ullamco tempor nisi enim sunt nulla elit.
          </div>
        </div>
      </div>

      <hr/>
      <div className={c(sGrid.container)}>
      .divider
        <div className={c(sGrid.row)}>
          <div className={c(s.outline, sGrid.col, sGrid.col)}>
            Excepteur laboris officia in fugiat proident (col)
          </div>
          <div className={c(sGrid.divider)} />
          <div className={c(s.outline, sGrid.col, sGrid.col)}>
            button with long text (col)
          </div>
          <div className={c(s.outline, sGrid.col, sGrid.col)}>
            button (col)
          </div>
        </div>
      </div>
  </div>
}
