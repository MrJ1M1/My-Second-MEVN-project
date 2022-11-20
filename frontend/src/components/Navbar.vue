<template>
    <div class="bg-success d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">

        <router-link to="/" class="text-decoration-none text-dark fw-bold mx-5 fs-3">My First Own Vue.js CRUD</router-link>

      <nav class="d-inline-flex mt-2 mt-md-0 py-2 ms-md-auto">
        <router-link to="/create" class="btn btn-dark mx-5 text-decoration-none">Create</router-link>
      </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar'    
}
</script>

<style scoped>
    
</style>
