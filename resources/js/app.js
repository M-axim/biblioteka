import './bootstrap'
import { createApp } from 'vue'
import router from "./router"
import store from "./store/store"
import {PageFlip} from 'page-flip'

// Import vue-components
import header from './components/Header'
import spinner from "./components/blocks/Spinner"
import inputLine from './components/blocks/InputLine'
import inputNumber from "./components/blocks/InputNumber"
import inputSelect from "./components/blocks/InputSelect"
import inputTextarea from "./components/blocks/InputTextarea"
import inputDatalist from "./components/blocks/InputDataList"
import inputCheck from "./components/blocks/InputCheck"
import inputTel from './components/blocks/InputTel'
import chevronDoubleRight from './components/icons/chevron-double-right'
import chevronDoubleLeft from './components/icons/chevron-double-left'
import house from './components/icons/house'


const app = createApp({})

app.component('v-header', header).default
app.component('v-spinner', spinner).default
app.component('v-inputLine', inputLine).default
app.component('v-inputNumber', inputNumber).default
app.component('v-inputSelect', inputSelect).default
app.component('v-inputTextarea', inputTextarea).default
app.component('v-inputDatalist', inputDatalist).default
app.component('v-inputCheck', inputCheck).default
app.component('v-inputTel', inputTel).default
app.component('v-chevronDoubleRight', chevronDoubleRight).default
app.component('v-chevronDoubleLeft', chevronDoubleLeft).default
app.component('v-house', house).default

app.use(router);
app.use(store);
//app.use(pageFlip);
app.mount('#app');

