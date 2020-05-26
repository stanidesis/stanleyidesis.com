import '../styles/main.scss'

import React from 'react'
import App from 'next/app'

class BogodeIdesisApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return {
      pageProps
    }
  }

  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default BogodeIdesisApp
