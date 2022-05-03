import type { Component } from 'solid-js'

import GlobalStateDemo from './components/GlobalStateDemo'
import Navigator from './components/Navigator'
import Routes from './routes'

import { globalStyles } from './styles/global'

const App: Component = () => {
  globalStyles()

  return (
    <>
      <Navigator />
      <GlobalStateDemo />
      <Routes />
    </>
  )
}

export default App
