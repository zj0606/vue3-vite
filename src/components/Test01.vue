<template>
    <div>
        <MyComponent v-model="changIpt" ></MyComponent>
        <div>{{changIpt}}</div>
        <MyComponentB v-model:title="changTitle" ></MyComponentB>
        <div>{{changTitle}}</div>
        <MyComponentC v-model:first-name="firstName" v-model:last-name="lastName" ></MyComponentC>
        <div>firstName:{{firstName}}<br/>lastName:{{lastName}}</div>
        组件上使用修饰符：
        <my-component-d v-model:second-name.capitalize="secondName"></my-component-d>
        <div>{{secondName}}</div>
    </div>
</template>

<script>
    const MyComponent = {
        props:['modelValue'],
        emits:{'update:modelValue':null},
        template:`<div><input type="text" :value="modelValue" @input="$emit('update:modelValue',$event.target.value) "/></div>`
    }
    const MyComponentB = {
        props:{
            title:String
        },
        emits:['update:title'],
        template:`<div><input type="text" :value="title" @input="$emit('update:title',$event.target.value) "/></div>`
    }
    const MyComponentC = {
        props:{
            firstName:String,
            lastName:String
        },
        emits:['update:firstName','update:lastName'],
        template:`<div><input type="text" :value="firstName" @input="$emit('update:firstName',$event.target.value) "/>
        <input type="text" :value="lastName" @input="$emit('update:lastName',$event.target.value) "/></div>`
    }
    const MyComponentD = {
        props:['secondName','secondNameModifiers'],
        emits:['update:secondName'],
        template:`<div><input type="text" :value="secondName" @click="$emit('update:secondName',$event.target.value)" /></div>`
        ,
        created(){
            console.log(this.secondNameModifiers);
            if(this.secondNameModifiers?.capitalize){
                console.log('capitalize修饰符');
            }
        }
    }
    export default {
        components:{MyComponent,MyComponentB,MyComponentC,MyComponentD},
        data(){
            return {
                changIpt:'测试v-model',
                changTitle:'测试v-model传参',
                firstName:'first',
                lastName:'last',
                secondName:'secondName'
            }
        }
    }
</script>

<style scoped>

</style>