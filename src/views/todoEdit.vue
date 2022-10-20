<template>
    <div class="border border-3  border-white p-5">
        <div >
            <h1 class="text-white p-3">Prática Laboratorial 08</h1>
        </div>
        <div class="border border-white d-flex flex-column mt-4 p-4">  
            <form @submit.prevent="onSubmitHandler($event)">
                <div class="d-flex justify-content-start">
                <input type="text" class="form-control" placeholder="Descrição da tarefa" ref="descricao" v-model="addTodo.description">
                </div>
                <div class=" d-flex flex-row mt-4 gap-2">
                    <p class ="text-white">Completa?</p>
                    <!--<div class="">
                        <input class="" type="radio" id="one" name="radioFalse" value="Por concluir" v-model="addTodo.complete" />
                        <input class="" type="radio" id="two" name="radioTrue" value="Concluido" v-model="addTodo.complete" />
                    </div>-->
                    <div class="form-check form-check-inline">
                        <input type="radio" id="radio1" name="inlineRadioFalse" value="Incomplete" v-model="addTodo.complete"/>
                    </div>
                    <div class="form-check form-check-inline">
                        <input type="radio" id="radio2" name="inlineRadioTrue" value="Complete" v-model="addTodo.complete"/>
                    </div>
                </div>
                <div class=" d-flex flex-row justify-content-end gap-2">
                    <button type="reset" class="border border-white bg-danger rounded" @click="cancelar">Cancelar</button>
                    <button type="submit" class="border border-white bg-primary rounded">Guardar</button>
                </div>
            </form>
        </div>          
    </div>
</template>

<script>
    import addTodo from '../models/addTodo';
    import {mapState} from 'pinia';
    import {todoStore} from '../store/todoStore';

    export default {
        setup(){
            const todoStoreU = todoStore()
            return {todoStoreU}  
        },

        data(){
            return {
                addTodo: new addTodo(),
            };
        },

        computed: {
            getTodos(){
                return this.todoStoreU.getTodos;
            }
        },

        methods: {
            onSubmitHandler(e) {
                if(this.addTodo.id){
                    this.todoStoreU.update(this.addTodo)
                }
                else{
                    if(this.addTodo.description == '' || this.addTodo.complete == null){
                        alert("Empty fields");
                    }
                    else{
                        this.todoStoreU.add(this.addTodo)
                        this.$router.push({name: "todoList"});
                    }
                }
            },

            cancelar(){
                this.$router.push({name: "todoList"});
            }
        },    
    }
</script>

<style scoped>

#radio1 {
    accent-color: #DC3545;
}

#radio2 {
    accent-color: #0850f7;
}


input[name="inlineRadioFalse"] {
	accent-color: #DC3545;
}
input[name="inlineRadioTrue"] {
	accent-color: #0850f7;
}

</style>