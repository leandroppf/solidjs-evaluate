import { Component, createSignal } from 'solid-js'

import { globalText, setGlobalText } from '../../store/textStoreDemo'

import * as stiches from './styles'

const HomePage: Component = () => {
  const [localText, setLocalText] = createSignal<string>('')

  return (
    <div class={stiches.home()}>
      <span>Input estado local:</span>
      <input
        type="text"
        value={localText()}
        onInput={(e) => setLocalText(e.currentTarget.value)}
      />
      <span>Input estado global:</span>
      <input
        type="text"
        value={globalText()}
        onInput={(e) => setGlobalText(e.currentTarget.value)}
      />
    </div>
  )
}

export default HomePage
