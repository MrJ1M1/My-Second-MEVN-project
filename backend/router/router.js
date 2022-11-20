import express from 'express'
import mongoose from 'mongoose'

import Post from '../dbModel/model.js'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const allPosts = await Post.find()
        res.json(allPosts)
    } catch (error) {
        console.log(error);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const {
            id
        } = req.params
        const thePost = await Post.findById(id)
        if (!thePost) return res.status(404).send('Bu id da Hech qanday element topilmadi!...')
        res.json(thePost)
    } catch (error) {
        console.log(error);
    }
})

router.post('/', async (req, res) => {
    try {
        const post = req.body
        const madePost = await Post.create(post)
        res.status(200).json(madePost)
    } catch (error) {
        console.log(error);
    }
})

router.put('/:id', async (req, res) => {
    try {
        const {
            id
        } = req.params
        const {
            topic,
            information,
            author
        } = req.body

        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).send('Post Topilmadi!...')
        const updatedPost = {
            topic,
            information,
            author,
            _id: id
        }
        await Post.findByIdAndUpdate(id, updatedPost, {
            new: true
        })
        res.json(updatedPost)
    } catch (error) {
        console.log(error);
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    await Post.findByIdAndRemove(id)
    res.json({message: 'Post O\'chirildi!...'})
})

export default router
