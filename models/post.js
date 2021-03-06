const mongoose = require('mongoose') ;

const postSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: "Title is required",
        minlength: 4,
        maxlength: 150
    },
    body: {
        type: String,
        required: "Body is required",
        minlength: 4,
        maxlength: 1500
    }
});
// capital P is convention
module.exports = mongoose.model("Post", postSchema)