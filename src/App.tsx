import type { Component } from 'solid-js'

import Navigator from './components/Navigator'
import Routes from './routes'

import { globalStyles } from './styles/global'

const App: Component = () => {
  globalStyles()

  return (
    <>
      <Navigator />
      <Routes />
    </>
  )
}

export default App
