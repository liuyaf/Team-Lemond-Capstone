<template>
  <div id="notFound">
    <div class="text-center mx-auto mt-5">
      <h1>404</h1>
      <h3>Oops! This Page Could Not Be Found</h3> 
      <p>
        Sorry but the page you are looking for does not exist
      </p>
      <button class="btn"><a href="javascript:history.go(-1)">Return to previous page</a></button>
    </div> 
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'notFound'
}
</script>

<style scoped>

</style>