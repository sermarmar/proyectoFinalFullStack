const express = require('express');
const router = express.Router();

let apiPostsRouter = require('./api/posts');
let apiUsersRouter = require('./api/users');

router.use('/posts', apiPostsRouter);
router.use('/users', apiUsersRouter);


module.exports = router;