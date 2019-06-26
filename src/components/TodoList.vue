<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in propsdata" :key="index" class="shadow">
        <i class="fas fa-check checkBtn" :class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem,index)"></i>
        <span :class="{textCompleted:todoItem.completed}">{{todoItem.item}}</span>
        <span class="removeBtn" @click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  data() {
    return {
      todoItems: [] // 배열 초기화
    };
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          var itemJson = localStorage.getItem(localStorage.key(i));
          this.todoItems.push(JSON.parse(itemJson));
        }
      }
    }
  },
  methods: {
    removeTodo: function(todoItem, index) {
        this.$emit('removeItemEvent', todoItem, index);
    },
    toggleComplete: function(todoItem, index) {
        this.$emit('toggleItemEvent', todoItem, index);
    }
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
</style>
