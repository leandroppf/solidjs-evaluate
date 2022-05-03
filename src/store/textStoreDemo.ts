import { createSignal } from 'solid-js'

export const [globalText, setGlobalText] = createSignal<string>('')
