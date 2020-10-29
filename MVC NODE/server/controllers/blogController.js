const Blog = require('../models/Blog');

exports.mostrarPosts = async (req,res) => {
    const posts = await Blog.findAll()
    res.render('blog' , {
        posts
    });
}