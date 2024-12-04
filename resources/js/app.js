import './bootstrap'
import { createApp } from 'vue'
import App from "./App.vue"
import router from './router'
import vueNumberFormat from 'vue-number-format'
import moment from './plugins/moment'
import Pagination from '@/components/Pagination.vue'

const app = createApp(App)
app.use(vueNumberFormat, { precision: 2, prefix: '', decimal: ',', thousand: '.'})
app.use(moment)
app.use(router)
app.component('Pagination', Pagination)
app.mount('#app')
