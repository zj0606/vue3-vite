import { createApp, h ,defineAsyncComponent} from 'vue'
import App from './App.vue'

const asyncComP = defineAsyncComponent(()=>
  // new Promise((resolve,reject)=>{
  //   resolve({
  //     template:`<div>defineAsyncComponent</div>`
  //   })
  // })
  import('./components/DynamicComp.vue')
)
const app = createApp(App)
app.component('todo-item', {
    render: ()=>{
      return h('div',{},'hi')
    }
  })
app.component('li-item',{
  template:`<li>li remplate</li>`
})
app.component('anchored-heading',{
  render(){
    return h(
      'h'+this.level,
      {},
      this.$slots.default()
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})
app.component('async-comp',asyncComP)
app.mount('#app')
