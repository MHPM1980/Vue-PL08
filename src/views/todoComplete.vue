<template>
    <div class="border border-3  border-white p-5">
        <div >
            <h1 class="text-white p-3">Prática Laboratorial 08</h1>
        </div>
        <div class="d-flex flex-row justify-content-between mt-4 align-items-end gap-4">  
            <div class="text-white">
                <p>Tarefas ({{this.selected}}/{{getCounter}})</p>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="button" class="btn btn-primary border-white" @click="todos">Todos</button>
                <button type="button" class="btn btn-primary border-white" @click="todoIncomplete">Por concluir</button>
                <button type="button" class="btn btn-primary border-white" @click="todoComplete">Completas</button>
                <button type="button" class="btn btn-primary border-white" @click="criar">Criar</button>
            </div>
        </div>
        <div class="border border-3 mt-4 border-white p-3">
            
                <div class="d-flex flex-row border border-2 border-white p-4 gap-2" v-for="(item,i) in getTodosComplete">
                    <div>
                        <input class="form-check-input" type="radio" @click="selectTodo(i)" name="flexRadioDefault" id="flexRadioDefault1">    
                    </div>
                    <div>
                        <p class="text-white">{{item.description}}</p>
                    </div>
                    <div>
                        <button class="btn btn-primary border border-white " @click="todoDetail(item)">Detalhe</button>
                    </div>
                </div>
        </div>                
    </div>
</template>

<script>
    import {mapState} from 'pinia';
    import {todoStore} from '../store/todoStore';

    export default {
        setup(){
            const todoStoreU = todoStore()
            return {todoStoreU}  
        },
        data(){
            return {
                selected: 0,
            };
        },

        computed: {
            ...mapState(todoStore,['getCounter', 'getTodosComplete'])
        },

        methods:{
            criar(){
                this.$router.push({name: "todoEdit"});
            },

            selectTodo(id){
                this.selected = id + 1
            },

            todoDetail(item){
                this.$router.push({name: "todoDetail", params: {id:item.id, description:item.description, complete: item.complete, date:item.date}});
            },

            todoComplete(){
                this.$router.push({name: "Complete"});
            },

            todoIncomplete(){
                this.$router.push({name: "Incomplete"});
            },

            todos(){
                this.$router.push({name: "todoList"});
            },
        }
    }

</script>

<style scoped>

#grid{
    display:grid;
    grid-template-columns: auto auto auto;
}

</style>