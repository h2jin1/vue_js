import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex); // react 처럼 서드파티 라이브러리 쓸 때 use 키워드를 쓴다.

const storage = {
    //fetch: function() {
    fetch() {
        const arr = [];
        if(localStorage.length > 0){
            for(let i=0; i < localStorage.length; i++) {
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    },
};

// store.js 의 변수를 main.js에서 쓰기 때문에  export 해줌.
export const store = new Vuex.Store({
    state: {
        headerText: 'TODO it!',
        todoItems :storage.fetch()
    },
    getters: {
        getTodoItems(state) {
            return state.todoItems;
        }
    },
    mutations: {
        addTodo(state, todoItem) {            
            const obj = { completed: false, item: todoItem };
            localStorage.setItem(todoItem,JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeTodo: function(state, payload) {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
        },
        toggleOneItem: function(state, payload) {
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        removeAllItem: function(state) {
            localStorage.clear();
            state.todoItems = [];
        }
    }
});
