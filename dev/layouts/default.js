// Styles
import s from './default.scss'
// import { sBase } from '../sass'
import sBase from '@btna/styles/base.scss'
import sGrid from '@btna/styles/grid.scss'

// Packages
import React, {Component} from 'react';
import { connect } from "react-redux"
import Head from "next/head";

// Components
import { NavBar, ThemeButton } from '../components'

// Sections
import {
  Header,
  Panel
} from '../sections'

// Helpers
import { classes as c } from '@btna/helpers'

const navbarItems = [
  {display: 'Home', url: '/'}
]

// Code
class Layout extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { children, pageTitle, leftPanel, corner, navbar } = this.props;
    return (
      <div theme={this.props.theme} className={c(sBase.app, s.full)}>
        <Head><title>{pageTitle}</title></Head>
        <Header
          className={s.header}
          navbar={navbar || <NavBar list={navbarItems}/>}
          corner={corner || <ThemeButton/>}
        />

        <Panel className={s.panel} leftPanel={leftPanel}>
          {children}
        </Panel>
      </div>
    )
  }
}


// State to Props
const mapStateToProps = ({ theme }) => ({
  theme: theme
})

// Dispatch to Props
const mapDispatchToProps = {
}

// Connect and export
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)
