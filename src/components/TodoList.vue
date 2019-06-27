import { store } from '../store/store';
<template>
  <div>
    <!-- <ul> -->
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in getTodoItems" :key="index" class="shadow">
        <i class="fas fa-check checkBtn" :class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleOneItem({todoItem, index})"></i>
        <span :class="{textCompleted:todoItem.completed}">{{todoItem.item}}</span>
        <span class="removeBtn" @click="removeTodo({todoItem, index})">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
    <!-- </ul> -->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  // props: ['propsdata'],
  data() {
    return {
      todoItems: [] // 배열 초기화
    };
  },
  // created() {
  //   if (localStorage.length > 0) {
  //     for (var i = 0; i < localStorage.length; i++) {
  //       if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
  //         var itemJson = localStorage.getItem(localStorage.key(i));
  //         this.todoItems.push(JSON.parse(itemJson));
  //       }
  //     }
  //   }
  // },
  computed: {
    // getTodoItems() {
    //         return this.$store.getters.getTodoItems;
    // }
    ...mapGetters(['getTodoItems'])

  },
  methods: {
    // removeTodo: function(todoItem, index) {
    //     // this.$emit('removeItemEvent', todoItem, index);
    //     this.$store.commit('removeTodo', {todoItem, index});
    // },
    // toggleComplete: function(todoItem, index) {
    //     //this.$emit('toggleItemEvent', todoItem, index);
    //     this.$store.commit('toggleOneItem', {todoItem, index});
    // }
    
    ... mapMutations(['removeTodo', 'toggleOneItem']), // 객체로 {todoItem, index} 넘기는 부분을 위에 클릭 이벤트에 넣어줘야 함.
    //...mapMutations( { remove: 'removeTodo' } ), // 배열 말고 객체로 넘기면 메소드 명을 key 값으로 변경해 줘야 함.
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
/* 이벤트 효과
 * List Entering/Leaving Transitions
 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
