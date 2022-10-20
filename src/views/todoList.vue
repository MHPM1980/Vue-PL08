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
                <button type="button" class="btn btn-primary border-white">Por concluir</button>
                <button type="button" class="btn btn-primary border-white">Completas</button>
                <button type="button" class="btn btn-primary border-white" @click="criar">Criar</button>
            </div>
        </div>
        <div class="border border-3 mt-4 border-white p-3">
            <table class="table align-middle table-dark">
                <tr class="border border-2 mx-4 my-2 border-white py-2" v-for="(item,i) in getTodos">
                    <td><input class="form-check-input" type="radio" @click="selectTodo(i)" name="flexRadioDefault" id="flexRadioDefault1"></td>
                    <td class=""><p>{{item.description}}</p></td>
                    <td class="text-end"><button class="btn btn-primary border border-white " @click="detail(item)">Detalhe</button></td>
                </tr>
            </table>
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
                selected: 0
            };
        },

        computed: {
            ...mapState(todoStore,['getTodos','getCounter'])
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
            }
        }
    }
</script>

<style scoped>



</style>