import type { Component } from 'solid-js'

import * as stiches from './styles'

const RouteDemo: Component = () => {
  return (
    <div class={stiches.routeDemo()}>
      <span>Demonstração de Rota</span>
    </div>
  )
}

export default RouteDemo
