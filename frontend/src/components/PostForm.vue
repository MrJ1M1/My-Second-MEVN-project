<template>
    <div class="container">
        <form @submit.prevent="submitForm">
            <div class="mb-3">
                <label for="topic" class="fw-bold fs-3 form-label">TOPIC</label>
                <input v-model="post.topic" type="text" class="form-control" id="topic" aria-describedby="emailHelp">
            </div>

            <div class="form-floating mb-5">
                <textarea v-model="post.information" class="form-control" placeholder="Leave a comment here" id="textarea" style="height: 200px"></textarea>
                <label class="fw-bold fs-5" for="textarea">Informations</label>
            </div>

            <div class="mb-3">
                <label for="author" class="fw-bold fs-3 form-label">AUTHOR</label>
                <input v-model="post.author" type="text" class="form-control" id="author">
            </div>
            <button type="submit" class="btn btn-primary">Create</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'PostForm',
    props: ['post', 'submitForm']
}
</script>

<style scoped>
    
</style>
