import type { Component } from 'solid-js'

import { globalText } from '../../store/textStoreDemo'

import * as stiches from './styles'

const GlobalStateDemo: Component = () => {
  return (
    <div class={stiches.globalDemo()}>
      <span>Input estado global: {globalText()}</span>
    </div>
  )
}

export default GlobalStateDemo
