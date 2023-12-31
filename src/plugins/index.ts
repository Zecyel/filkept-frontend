import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
import Toast from './toast'

import type { App } from 'vue'

export function registerPlugins (app: App) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(Toast)
}
