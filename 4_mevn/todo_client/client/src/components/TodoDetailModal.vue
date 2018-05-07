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
          <button type="button" class="btn btn-primary" @click.once="InsertupdateDetail(selectedType)">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['selectedTodo', 'selectedType'],
  data () {
    return {
      data: {
      }
    }
  },
  methods: {
    InsertupdateDetail: function (type) {
      let todo = {}
      let form = document.getElementsByClassName('form-control')

      // todo 
      for (let i = 0; i < form.length; i++) {
        let id = form[i].id
        let value = form[i].value
        console.log('id - ' + id)
        console.log('value - ' + value)

        todo[id] = value
      }

      const baseURI = 'http://localhost:8081'
      this.loading = true
      this.$http.post(`${baseURI}/api/todo/insert`, {
        userid: this.$route.params.userid,
        type: type,
        todo: todo
      })
        .then((result) => {
          console.log(result)
          this.loading = false
          this.showModal = false
        }).catch(error => {
          this.loading = false
          console.log(error)
        })
    }
  }
}
</script>

<style>

</style>
