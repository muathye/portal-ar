// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import VPArdoc from './VPArdoc.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: VPArdoc,
}