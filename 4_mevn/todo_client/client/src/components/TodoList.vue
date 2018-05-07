<template>
 <div>
    <div v-bind:key=todoList.type v-for="todoList in userTodoList" class="card">
      <div class="card-header">
        {{ userTodoList.userid  }}
      </div>
      <todoSubList @todoDetail="todoDetail(todoList.type, $event)" :todoList=todoList.todo>
      </todoSubList>
    </div>

    <div v-if="showModal">
      {{ selectedTodo }}
      {{ selectedTodo.todo[0] }}
      <todoDetailModal @getInsertupdateDetail="insertupdateDetail(type, $event)" :selectedTodo=selectedTodo.todo[0] :selectedType=selectedType>
      </todoDetailModal>
    </div>
  </div>
</template>

<script>
import TodoSubList from './TodoSubList.vue'
import TodoDetailModal from './TodoDetailModal.vue'

export default {
  components: {
    'todoSubList': TodoSubList,
    'todoDetailModal': TodoDetailModal
  },
  created: function () {
    const userid = this.$route.params.userid
    const baseURI = 'http://localhost:8081'
    this.loading = true
    this.$http.get(`${baseURI}/api/todo/find/${userid}`)
      .then((result) => {
        console.log(result)
        this.loading = false
        this.userTodoList = result.data
      }).catch(error => {
        this.loading = false
        console.log(error)
      })
  },
  data: function () {
    return {
      userTodoList: [],
      selectedTodo: {},
      selectedType: 0,
      showModal: false
    }
  },
  methods: {
    todoDetail: function (type, item) {
      const baseURI = 'http://localhost:8081'
      this.loading = true
      this.$http.post(`${baseURI}/api/todo/find`, {
        userid: this.$route.params.userid,
        type: type,
        item: item
      })
        .then((result) => {
          console.log(result)
          this.loading = false
          this.showModal = true
          this.selectedType = type
          if (result.data['todo'] == null) {
            this.selectedTodo = { 'todo': [{ item: item, content: '' }] }
          } else {
            this.selectedTodo = result.data['todo']
          }
        }).catch(error => {
          console.log(error)
          this.loading = false
          this.showModal = false
        })
    }
  }
}
</script>
