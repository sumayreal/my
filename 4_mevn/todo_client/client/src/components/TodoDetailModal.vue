<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div v-bind:key="key" v-for="(value,key) in selectedTodo">
            <form>
              <div class="form-group">
                <label v-bind:for="key" class="col-form-label">{{ key }}:</label>
                <input type="text" class="form-control" v-bind:id="key" v-bind:value="value">
              </div>
            </form>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['selectedTodo'],
  data () {
    return {
      data: {
      }
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
