import axios from 'axios';

const base_url = 'http://localhost:4500/api/todos';

const state = {
    headerText: 'TODO it!',
    todoItems : []
}
const getters = {
    getTodoItems(state) {
        return state.todoItems;
    }
}
const actions = {
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
}
const mutations = {
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
export default {
    state,
    getters,
    actions,
    mutations
}