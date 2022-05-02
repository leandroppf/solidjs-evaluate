import type { Component } from 'solid-js'
import { Routes, Route } from 'solid-app-router'

import Navigator from './components/Navigator'

import HomePage from './pages/HomePage'
import RouteDemo from './pages/RouteDemo'

import { globalStyles } from './styles/global'

const App: Component = () => {
  globalStyles()

  return (
    <>
      <Navigator />
      <Routes>
        <Route path="/" component={HomePage} />
        <Route path="/route-demo" component={RouteDemo} />
      </Routes>
    </>
  )
}

export default App
