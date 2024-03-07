import './assets/main.css'
import { Button } from 'vant';

import 'vant/lib/index.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(Button);

 
