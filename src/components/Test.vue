<template>
    <div id="list-rendering">
      测试组件：
      <ul><li-item></li-item>
      </ul>
      <table>
        <blog-post-row></blog-post-row>
        <BlogPostRow></BlogPostRow>
      </table>
        <ComponentA/>
        <component-a @my-click="showMe"></component-a>
        <todo-item></todo-item>
        <ol>
            <li v-for="todo in todos" v-bind:key="todo">
            {{ todo.text }}
            </li>
        </ol>
        <span v-once @click="changeMsg">这个将不会改变: {{ message }}</span>
        <span>html:{{html}}</span>
        <span v-html="html" v-bind:class="'class_'+red"></span>
        <span class="static" :class="{fontS:isFontSize,fontC:isC}">class study</span>
        <br>
         <span class="static" :class="classObject">class study</span>
         <br>
         <span class="static" :class="classComputed">class study</span>
          <br>
         <span class="static" :class="[s,c]">class study Array</span>
         <br>
         <span class="static" :class="[isFontSize?s:'',c]">class study Array</span>
    </div>
</template>
<script>
const ComponentA = {
  emits:['myClick'],
  template:'<div @click="clickme">this is div</div>',
  methods:{
    clickme(){
      this.$emit('myClick','自定义事件')
    }
  }
}
const BlogPostRow = {
  template:'<tr><td>测试is attribute</td></tr>'
}
export default {
  components:{ComponentA,BlogPostRow},
  data() {
    return {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ],
      message:'test message',
      html:'<b>我是html</b>',
      red:'red',
      isFontSize:false,
      isC:true,
      classObject:{fontS:false,fontC:true},
      s:'fontS',
      c:'fontC'
    }
  },
  methods:{
    changeMsg(){
      this.message = '改变了吗？'
    },
    showMe(a){
      alert(a)
    }
  },
  computed:{
    // getter
    classComputed(){
      return{
        fontS:this.isFontSize,fontC:this.isC
      }
    }
  }
}
</script>
<style scoped>
  .class_red{
    color: red;
  }
  .static{
    font-weight: bold;
  }
  .fontS{
    font-size: 30px;
  }
  .fontC{
    color: blue;
  }
</style>

