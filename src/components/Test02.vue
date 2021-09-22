<template>
    <div>
      <MyComponent action="learn">
          <!-- 插槽学习 -->
          {{msg}}{{action}}
      </MyComponent>
      <div>v-slot 指令只能用于template (只有一种例外情况:只有默认插槽时 可以用在组件上，把组件当做插槽模板)</div>
      <MyComponentA>
          <template v-slot:footer>
              this is footer
          </template>
          <template v-slot:header>
              this is header
          </template>
          <template v-slot:default>
              this is main
          </template>
      </MyComponentA>
      <hr/>
      <MyComponentB #default="slotProps">
          <!-- <template v-slot:default="slotProps">
              {{slotProps.compName}}{{slotProps.id}}{{slotProps.value}}
          </template> -->
          <!-- <template #default="slotProps">
              {{slotProps.compName}}{{slotProps.id}}{{slotProps.value}}
          </template> -->
          
            {{slotProps.compName}}{{slotProps.id}}{{slotProps.value}}
          
      </MyComponentB>
      <MyComponentB #default="{compName,id,value}">
          <!-- <template v-slot:default="slotProps">
              {{slotProps.compName}}{{slotProps.id}}{{slotProps.value}}
          </template> -->
          <!-- <template #default="slotProps">
              {{slotProps.compName}}{{slotProps.id}}{{slotProps.value}}
          </template> -->
          
            {{compName}}{{id}}{{value}}
          
      </MyComponentB>
    </div>
</template>

<script>
    const MyComponent = {
        props:['action'],
        template:`<div>{{action}}<slot>slot default</slot></div>`
    }
    const MyComponentA = {
        template:`<div>
            <header><slot name="header"></slot></header>
            <main><slot name="default"></slot></main>
            <footer><slot name="footer"></slot></footer>
        </div>`
    }
    const MyComponentB = {
        data(){
            return {todos:[{id:1,name:'todo001'},{id:2,name:'todo002'}],componentName:'bb'}
        },
        template:`<ul>
            <li v-for="item of todos" :key="item.id"><slot :id="item.id" :value="item.name" :compName="componentName"></slot></li>
        </ul>`
    }
    export default {
        components:{MyComponent,MyComponentA,MyComponentB},
        data(){
            return{msg:'测试插槽作用域'}
        }
        
    }
</script>

<style scoped>

</style>