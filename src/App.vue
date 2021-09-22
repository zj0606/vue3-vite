<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.vue'
import Test01 from './components/Test01.vue'
import Test02 from './components/Test02.vue'
import ProvideAndInject from './components/ProvideAndInject.vue'
import DynamicComp from './components/DynamicComp.vue'
import DefineAsyncComponent from './components/asyncComp.vue'
import transitionTest from './components/transitionTest.vue'
import transitionModel from './components/transitionModel.vue'
import transitionGroup from './components/transitionGroup.vue'
import dynamicTransition from './components/dynamicTransition.vue'
import RenderFunc from './components/RenderFunc.vue'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <Test/> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <!-- <Test01/> -->
  <!-- <test-02></test-02> -->
  <!-- <ProvideAndInject/> -->
  <!-- <DynamicComp/> -->
  <!-- <DefineAsyncComponent/> -->
  <!-- <transitionTest/> -->
  <!-- <transitionModel/> -->
  <!-- <transitionGroup/> -->
  <!-- <dynamicTransition/> -->
  <RenderFunc/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
