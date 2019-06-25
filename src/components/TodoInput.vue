<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">추가</button> -->
    <span class="addContainer" @click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: ""  // 변수 초기화
    };
  },
  methods: {
    // addTodo: function() {
    //   if (this.newTodoItem !== "") {  // validation 체크
    //     localStorage.setItem(this.newTodoItem, this.newTodoItem);
    //     this.clearInput();
    //   }
    // },
    addTodo: function() {
        if(this.newTodoItem !== "") {
            // 컴포넌트 간의 통신이 필요함.
            // 등록된 아이템이 바로 리스트에 보이도록.
            this.$emit('addItemEvent', this.newTodoItem);
            this.clearInput();
        }    
    },
    clearInput: function() {
      this.newTodoItem = "";
    }
  }
};
</script>

<style>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
