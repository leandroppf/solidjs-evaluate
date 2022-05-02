import type { Component } from 'solid-js'
import { Routes as SolidAppRoutes, Route } from 'solid-app-router'

import HomePage from '../pages/HomePage'
import RouteDemo from '../pages/RouteDemo'

const Routes: Component = () => {
  return (
    <SolidAppRoutes>
      <Route path="/" component={HomePage} />
      <Route path="/route-demo" component={RouteDemo} />
    </SolidAppRoutes>
  )
}

export default Routes
