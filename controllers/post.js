const Post = require('../models/post')

exports.getPosts =  (req, res) => {
    const posts = Post.find().select('_id title body')
    .then((posts) => {
        res.status(200).json({posts})
    })
    .catch(error=> console.error(error))
};

exports.createPost = (req, res) => {
    const post = new Post(req.body)
    console.log('CREATING POST', req.body)
    
    post.save()
    .then(result => {
        res.status(200).json({
            post: result
        })
    })

    // post.save((err, result) => {
    //     if(err) {
    //         return res.status(400).json({
    //             error: err
    //         })
    //     }

    //     return res.status(200).json({
    //         post: result
    //     })
    // })
}