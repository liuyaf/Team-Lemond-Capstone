<template>
  <div class="contact">
    <form>
      <div class="form-group row justify-content-center">
        <label class="col-7 col-form-label" for="text">Name</label>
        <div class="col-7">
          <input id="text" name="text" type="text" required="required" class="form-control">
        </div>
      </div>
      <div class="form-group row justify-content-center">
        <label for="text1" class="col-7 col-form-label">Company/Organization</label>
        <div class="col-7">
          <input id="text1" name="text1" type="text" class="form-control">
        </div>
      </div>
      <div class="form-group row justify-content-center">
        <label for="text2" class="col-7 col-form-label">Phone</label>
        <div class="col-7">
          <input
            id="text2"
            name="text2"
            placeholder="(123)-456-7890"
            type="text"
            class="form-control"
            required="required"
          >
        </div>
      </div>
      <div class="form-group row justify-content-center">
        <label for="text3" class="col-7 col-form-label">Email</label>
        <div class="col-7">
          <input id="text3" name="text3" type="text" class="form-control" required="required">
        </div>
      </div>
      <div class="form-group row justify-content-center">
        <label for="textarea" class="col-7 col-form-label">Comments or Questions</label>
        <div class="col-7">
          <textarea id="textarea" name="textarea" cols="40" rows="5" class="form-control"></textarea>
        </div>
      </div>
      <div class="form-group row justify-content-center">
        <div class="offset-5 col-6">
          <button name="submit" type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "contact"
};
</script>

<style scoped>
.contact {
  margin-top: 150px;
  margin-bottom: 150px;
  margin-left: 150px;
  margin-right: 150px
}
</style>
