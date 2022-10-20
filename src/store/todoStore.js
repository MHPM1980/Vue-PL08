import {v4 as uuidv4} from 'uuid';
import { defineStore } from 'pinia';

export const todoStore = defineStore('todoStore', {
    state:() => {
        return{
            todos: [],
            todoEdit: [],
            counter: 0
        }
    },

    getters: {
        getTodos: (state) =>state.todos,
        getCounter: (state) =>state.counter,
    },

    actions: {
        add(todo) {
            try {
                todo.id = uuidv4();
                this.todos.push(todo);
                this.counter++;
            }
            catch (error) {
                throw error
            }
        },

        update(todo){
            try{
                this.todos[this.todos.findIndex(todoFind => todoFind.id == todo.id)] = todo;
                this.todoEdit = todo;
            }
            catch (error) {
                throw error
            }
        },
        
        delete(id){
            try{
                id = uuid4();
                this.todos.splice(id,1);
                if(this.counter > 0){
                    this.counter--;
                }
            }
            catch (error){
                throw error
            }
        },

        cleanEdit(){
            this.todoEdit = []
        }
    },
})    