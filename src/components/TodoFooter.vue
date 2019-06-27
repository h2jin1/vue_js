<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="removeAllItem">Clear All</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    methods: {
        // clearTodo: function() {
        //   // this.$emit('removeAllItemEvent');
        //   this.$store.commit('removeAllItem');
        // }

        //...mapMutations(['removeAllItem'])
        ...mapActions(['removeAllItem'])
    }
}
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>
