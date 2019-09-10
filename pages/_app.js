import '../assets/css/bootstrap.min.css'

import App, { Container } from 'next/app'

import { withApollo } from '../lib/apollo'

class TodoApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  rendre() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default withApollo(TodoApp)
