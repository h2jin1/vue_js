<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">추가</button> -->
    <span class="addContainer" @click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
      경고!
      <i class="closeModalBtn fas fa-times" @click="showModal=false"></i>
      </h3>
      <div slot="body">아무것도 입력하지 않았습니다.</div>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';
import { store } from '../store/store';
export default {
  data() {
    return {
      newTodoItem: "",  // 변수 초기화
      showModal: false
    };
  },
  components: {
    // 'Modal' : Modal 로 해야 하는데 ES6에서 생략 가능
    Modal
  },
  methods: {
    addTodo: function() {
        if(this.newTodoItem !== "") {
          // 컴포넌트 간의 통신이 필요함.
          // 등록된 아이템이 바로 리스트에 보이도록.
          // this.$emit('addItemEvent', this.newTodoItem);
          this.$store.commit('addTodo', this.newTodoItem);
          this.clearInput();
        } else {
          // this.showModal = true;
          this.showModal = !this.showModal;
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
.closeModalBtn {
color: #42b983;
}
</style>
