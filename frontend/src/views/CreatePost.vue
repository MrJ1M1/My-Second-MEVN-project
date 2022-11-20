<template>
    <post-form :post="post" :submitForm="createPost"/> 
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import {reactive} from 'vue'
import { useRouter } from 'vue-router';

export default {
  components: { PostForm },
    name: 'CreatePost',    
    setup(){
        const API_URL = 'http://localhost:5000/posts'
        const router = useRouter()
        const post = reactive({
            topic: '',
            information: '',
            author: ''
        })

        async function createPost() {
            try {
                const response = await fetch(API_URL, {
                    method : 'POST',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify({
                        topic: post.topic,
                        information: post.information,
                        author: post.author
                    })
                })

                const json = await response.json()

                router.push({
                    name: 'Home'
                })

            } catch (error) {
                console.log(error);
            }
        }

        return{
            post,
            createPost,
        }
    }
}
</script>
<style scoped>
    
</style>
