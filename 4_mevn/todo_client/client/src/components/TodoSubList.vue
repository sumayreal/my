<template>
  <div>
    <div class="list-group list-group-flush">
      <div v-show="data.showModal">
      </div>
      {{ data.showModal }}
      <div v-bind:key=todo.item v-for="todo in todoList">
          <button type="button"  @click.once="getTodoDetail(todo.item)" class="list-group-item list-group-item-action" data-toggle="modal" data-target="#exampleModal">{{ todo.content }}</button>
      </div>
          <button type="button" class="list-group-item list-group-item-action" @click.once="getTodoDetail(0)" data-toggle="modal" data-target="#exampleModal">추가</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['todoList'],
  data () {
    return {
      data: {
      }
    }
  },
  methods: {
    getTodoDetail: function (item, event) {
      this.$emit('todoDetail', item)
    }
  }
}
</script>

<style>

</style>
