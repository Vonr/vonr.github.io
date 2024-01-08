import { writable, type Writable } from 'svelte/store'

const themes = ['light', 'dark'] as const
type Theme = (typeof themes)[keyof typeof themes]

export const theme: Writable<Theme> = writable('light')
