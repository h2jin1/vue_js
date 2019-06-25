<template>
  <div class="hello">
    <h1>{{msgValue}}</h1>
    <button @click="showLog">Show</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // props: {
  //   msg: String
  // }
  // props - 상위(부모)에서 하위(자식)로 key 값을 넘길 때 
  props: ['msgValue'],
  methods: {
    showLog: function(e) {
      // 이벤트가 발생했다는 것을 상위 컴포넌트로 보냄.
      this.$emit('show-log');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
