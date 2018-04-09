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
      <todoDetailModal :selectedTodo=selectedTodo.todo[0]>
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
      showModal: false
    }
  },
  methods: {
    todoDetail: function (type, item) {
      console.log('item - ' + item)
      console.log('type - ' + type)

      if (item !== 0) {
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
            this.selectedTodo = result.data['todo']
            this.showModal = true
          }).catch(error => {
            this.loading = false
            console.log(error)
          })
      } else {
        this.selectedTodo = {'todo': [{item: 0, content: ''}]}
        this.showModal = true
      }
    },
    insertDetail: function (event) {
       const baseURI = 'http://localhost:8081'
        this.loading = true
        this.$http.post(`${baseURI}/api/todo/insert`, {
          userid: this.$route.params.userid,
          type: type,
          item: item
        })
          .then((result) => {
            console.log(result)
            this.loading = false
            this.selectedTodo = result.data['todo']
            this.showModal = true
          }).catch(error => {
            this.loading = false
            console.log(error)
          })
    }

  }
}
</script>
