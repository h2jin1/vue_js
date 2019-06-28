import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Vuex); // react 처럼 서드파티 라이브러리 쓸 때 use 키워드를 쓴다.
Vue.use(VueAxios, axios)

/*
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
}; */
const base_url = 'http://localhost:4500/api/todos';
// store.js 의 변수를 main.js에서 쓰기 때문에  export 해줌.
export const store = new Vuex.Store({
    state: {
        headerText: 'TODO it!',
        todoItems : []
    },
    getters: {
        getTodoItems(state) {
            return state.todoItems;
        }
    },
    actions : {
        loadTodoItems(context) {
            axios.get(`${base_url}`).then(res => res.data).then(items => {
                context.commit('setTodoItems', items);
            });
        },
        removeTodo: function(context, payload) {
            axios.delete(`${base_url}/${payload.id}`).then(res => res.data).then(items => {
                context.commit('setTodoItems', items);
            });
        },
        addTodoItem: function(context, payload) {
            axios.post(`${base_url}`, payload).then(res => res.data).then(items => {
                context.commit('setTodoItems', items);
            });
        },
        removeAllItem: function(context) {
            axios.delete(`${base_url}`).then(res => res.data).then(items => {
                context.commit('setTodoItems', items);
            });
        },
        toggleOneItem: function(context, payload) {
            axios.put(`${base_url}/${payload.id}`, payload).then(res => res.data).then(items => {
                context.commit('setTodoItems', items);
            });
        },
    },
    mutations: {
        setTodoItems(state, items) {
            state.todoItems = items;
        },
        addTodo(state, todoItem) {            
            let obj = { completed: false, item: todoItem };
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
