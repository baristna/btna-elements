import App from 'next/app'
import React from 'react'
import { reduxStore } from '../_config'
import { Provider } from 'react-redux'

class Baristna extends App {
  constructor (props) {
    super(props)
  }

  render () {
    const {Component, pageProps, reduxStore} = this.props
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default reduxStore(Baristna)
