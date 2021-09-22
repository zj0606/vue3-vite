<template>
    <div>
        <!-- <button v-for="item of tab" :key="item"
            :class="['tab-button',{active:currentTabComponent === item}]"
            @click="currentTabComponent = item"
        >{{item}}</button> -->
         <button v-for="item of tab" :key="item"
            :class="['tab-button',(currentTabComponent === item)?'active':'']"
            @click="currentTabComponent = item"
        >{{item}}</button>
        <keep-alive>
        <component :is="currentTabComponent"></component>
        </keep-alive>
    </div>
</template>

<script>
const Home = {
    template:`<div>this is home</div>`
}
const Post = {
    data(){
        return {
            todos:['选项一','选项二']
        }
    },
    template:`<div><select>
    <option v-for="(item, index) of todos" 
    :key="index" :value="item">{{item}}</option></select></div>`
}
const About = {
    template:`<div>this is about</div>`
}
    export default {
        components:{Home,Post,About},
        data(){
            return{
                tab:['home','post','about'],
                currentTabComponent:'home'
            }
        }
    }
</script>

<style scoped>
.tab-button{
    font-size: 20px;
}
.active{
    background-color: blue;
}
</style>