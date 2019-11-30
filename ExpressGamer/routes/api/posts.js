const express = require('express');
const router = express.Router();
const Post = require('../../models/post');

router.get('/', (req, res) => {
    Post.find((err, posts) => {
        if (err) return res.status(403).json(err);
        res.json(posts);
    });
});

router.get('/:idPost', (req, res) => {
    Post.findById(req.params.idPost, (err, post) => {
        res.json(post);
    });
});

router.post('/', (req, res) => {
    Post.create(req.body).then(post => {
        res.json(post);
    });
});

router.put('/', (req, res) => {
    console.log(req.body);
    Post.findByIdAndUpdate(req.body._id, req.body, { new: true }, (err, post) => {
        if (err) return res.json(err);
        res.json(post);
    });
});

router.delete('/:idPost', (req, res) => {
    Post.findByIdAndDelete(req.params.idPost, (err, post) => {
        res.json({ success: 'Se ha borrado correctamente' });
    });
});

module.exports = router;