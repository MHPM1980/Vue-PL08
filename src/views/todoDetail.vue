<template>
    <div class="border border-3  border-white p-5">
        <div >
            <h1 class="text-white p-3">Prática Laboratorial 08</h1>
        </div>
        <div class="border border-white d-flex flex-column mt-4 p-4">
            <form @submit.prevent = "editar($event)">
                <div class="d-flex flex-row justify-content-end align-items-end mt-4 gap-4">
                    <div>
                        <button class="border border-white bg-primary">Editar</button>
                    </div>
                    <div>
                        <button class="border border-white bg-danger" @click = "eliminar">Eliminar</button>
                    </div>
                </div>
                <div class="border border-white d-flex my-3 p-4">
                    <div class="d-flex flex-column align-items-start">
                        <input type="text" class="form-control" placeholder="Descrição da tarefa" ref="descricao" v-model="$route.params.description">
                        <div class=" d-flex flex-row mt-4 gap-2">
                            <div class="form-check form-check-inline">
                                <input type="radio" id="radio1" name="inlineRadio" value="Incomplete" v-model="$route.params.complete"/>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="radio" id="radio2" name="inlineRadio" value="Complete" v-model="$route.params.complete"/>
                            </div>
                        </div>
                        <p>{{$route.params.data}}</p>
                    </div>
                </div>
            </form>    
        </div>
    </div>    
</template>

<script>
    import { mapState } from 'pinia';
    import {todoStore} from '../store/todoStore';
    import addTodo from '../models/addTodo';

    export default {
        setup(){
            const todoStoreU = todoStore()
            return {todoStoreU}  
        },

        data(){
            return {
                todo: {}
            };
        },

        methods: {
            editar(){
                this.todo = {
                    id: this.$route.params.id,
                    description: this.$route.params.description,
                    complete:  this.$route.params.complete,
                    date: this.$route.params.date
                }
                if(this.todo.description == ''){
                    alert("description can't be empty");
                }
                else{
                    this.todoStoreU.update(this.todo)
                    this.$router.push({name: "todoList"});
                }
            },

            eliminar(){
                if(this.$route.params.complete == "Por concluir"){
                    alert("Todo not completed, can't be deleted.");
                }
                else{
                    this.todoStoreU.delete(this.$route.params.id)
                    this.$router.push({ name: "todoList" });
                }
            }
        }   
    }
</script>

<style scoped>

input[id="radio1"] {
	accent-color: #DC3545;
}
input[id="radio2"] {
	accent-color: #0850f7;
}

</style>