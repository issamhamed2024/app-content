import { createApp } from "vue"
import App from "./App.vue"
import Notifications from '@kyvg/vue3-notification'

createApp(App).mount("#app")
//import "./style.css"
//import store from "./store"
import router from "./router.js"
const app = createApp(App)
app.use(router)

app.use(Notifications)
//app.use(store)
app.mount("#app")

