import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    information: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
})

const Post = mongoose.model('Post', postSchema)

export default Post
