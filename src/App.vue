<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <hr>
  <router-view/>
  <hr>
  <br>
  <button @click="goFirst">第一个页面</button>
  <br>
  <button @click="goSecond">第二个页面</button>
  <butt>
  </butt>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods:{
    goFirst(){
      this.$router.push("/first")
    },
    goSecond(){
        this.$router.push("/second")
    }
  }
}
</script>

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
