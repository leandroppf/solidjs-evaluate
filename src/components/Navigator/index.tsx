import { Component, createMemo } from 'solid-js'
import { Link, useLocation } from 'solid-app-router'

import * as stiches from './styles'

const Navigator: Component = () => {
  const pathName = createMemo(() => useLocation().pathname)

  return (
    <div class={stiches.navigator()}>
      <Link
        class={stiches.navigatorButton({ selected: pathName() === '/' })}
        href="/"
      >
        HomePage
      </Link>
      <Link
        class={stiches.navigatorButton({
          selected: pathName() === '/route-demo',
        })}
        href="/route-demo"
      >
        RouteDemo
      </Link>
    </div>
  )
}

export default Navigator
