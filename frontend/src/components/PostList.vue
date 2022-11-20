<template>
    <div class="container">
        <div v-for="post in posts" :key="post._id" class="bg-secondary text-white card-body mt-5 border border-3 border-success rounded">
            <div>
                <h2>{{ post.topic }}</h2>
                <p>{{ post.information }}</p>
                <h4>Author: {{ post.author }}</h4>
            </div>
            <footer>
                <button @click="editPost(post._id)" class="btn btn-warning w-50 fs-5 shadow-none fw-bold">Edit</button>
                <button @click="removePost(post._id)" class="btn btn-danger w-50 fs-5 shadow-none fw-bold">Delete</button>
            </footer>
        </div>
    </div>
</template>

<script>
import {ref, onMounted} from 'vue'
import { useRouter } from 'vue-router';
export default {
    name: 'PostList',
    
    setup(){
        const router = useRouter()
        const posts = ref([])
        const API_URL = 'http://localhost:5000/posts'

        onMounted(() =>{
            getPosts()
        })

        async function getPosts(){
            try {
                const response = await fetch(API_URL)
                const json = await response.json()
    
                posts.value = json
            } catch (error) {
                console.log(error);
            }
        }
        
        async function removePost(_id) {
            const response = await fetch(`${API_URL}/${_id}`, {
                method: 'DELETE'
            })
            getPosts()
        }

        async function editPost(_id){
            router.push({
                name: 'Update',
                params: {
                    id: _id
                }
            })
        }

        return{
            posts,
            removePost,
            editPost,
        }
    }
}
</script>

<style scoped>
    
</style>
