<template>
    <div>
        <button @click="add">click</button>
        {{todos}}
        <my-comp></my-comp>
    </div>
</template>

<script>
import { ref,reactive,computed } from 'vue'
const MyComp = {
    inject:['user','todoLength'],
    template:`<div>{{user}}:{{todoLength}}</div>`
}
    export default {
        data(){
            return {
                todos:[1,2,3]
            }
        },
        // provide:{
        //     // todoLength:this.todos.length,//报错 当访问组件实例的property时要使用provide函数返回对象
        //     user:'zj'
        // },
        provide(){
            return {
            todoLength:computed(()=>this.todos.length),
            user:'zj'
        }},
        components:{MyComp},
        methods:{
            add(){
                this.todos.push(Math.ceil(Math.random()*10))
            }
        }
    }
</script>

<style scoped>

</style>