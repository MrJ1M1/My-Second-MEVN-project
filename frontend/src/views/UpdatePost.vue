<template>
    <post-form :post="post" :submitForm="updatePost"/>
</template>

<script>
import PostForm from '../components/PostForm.vue'
import {useRoute, useRouter} from 'vue-router'
import {ref, onMounted} from 'vue'
export default {
  components: { PostForm },
    name: 'UpdatePost',
    setup(){
        const route = useRoute()
        const router = useRouter()
        const API_URL = 'http://localhost:5000/posts'
        const post = ref({
            topic: '',
            information: '',
            author: ''
        })

        onMounted(() => {
            getPost()
        })

        async function getPost(){
            try {
                const { id } = route.params
                const response = await fetch(`${API_URL}/${id}`)
                const json = await response.json()
                post.value = json
            } catch (error) {
                console.log(error);
            }
        }

        async function updatePost(){
            try {
                const { id } = route.params
                const response = await fetch(`${API_URL}/${id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify({
                        topic: post.value.topic,
                        information: post.value.information,
                        author: post.value.author
                    })
                })
                const json  = await response.json()

                router.push({
                    name: 'Home'
                })
            } catch (error) {
                console.log(error);
            }
        }

        return{
            post,
            updatePost,
        }
    }
}
</script>
<style scoped>
    
</style>
