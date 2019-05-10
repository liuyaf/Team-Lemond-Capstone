<template>
  <div class="contact">
    <form>
      <div class="form-group row justify-content-center d-flex">
        <div class="col-md-6 justify-content-center">
          <label class="offset-md-5 col-md-7 col-form-label phoneDisplay" for="text">First Name:</label>
          <div class="offset-md-5 col-md-7 phoneDisplay">
            <input id="FName" name="text" type="text" required="required" class="form-control">
          </div>
        </div>
        <div class="col-md-6">
          <label class="col-md-7 col-form-label phoneDisplay" for="text">Last Name:</label>
          <div class="col-md-7 phoneDisplay">
            <input id="LName" name="text" type="text" required="required" class="form-control">
          </div>
        </div>
      </div>
      <div class="form-group row justify-content-center">
        <label for="text1" class="col-md-7 col-sm-12 col-form-label">Company/Organization</label>
        <div class="col-md-7 col-sm-12 ">
          <input id="text1" name="text1" type="text" class="form-control">
        </div>
      </div>
      <div class="form-group row justify-content-center">
        <label for="text2" class="col-md-7 col-sm-12  col-form-label">Phone</label>
        <div class="col-md-7 col-sm-12 ">
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
        <label for="text3" class="col-md-7 col-sm-12  col-form-label">Email</label>
        <div class="col-md-7 col-sm-12 ">
          <input id="text3" name="text3" type="text" class="form-control" required="required">
        </div>
      </div>
      <div class="form-group row justify-content-center">
        <label for="textarea" class="col-md-7 col-sm-12 col-form-label">Comments or Questions</label>
        <div class="col-md-7 col-sm-12 ">
          <textarea id="textarea" name="textarea" cols="40" rows="5" class="form-control"></textarea>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-12 d-flex justify-content-center">
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
  margin-left: 125px;
  margin-right: 125px;
}

@media (max-width: 767px) {
  .contact {
    margin-left: 50px;
    margin-right: 50px;
  }

  .phoneDisplay {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
