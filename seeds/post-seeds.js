const { Post } = require('../models');

const postData = [
    {
        title: 'The reality of being a writer',
        post_content: 'Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.',
        user_id: 3
    },
    {
        title: 'Bears. Beets. Battlestar Galactica.',
        post_content: 'Identity theft is not a joke, Jim! Millions of families suffer every year.',
        user_id: 1
    },
    {
        title: "Isn't this everyone's dream?",
        post_content: 'I just want to lie on the beach and eat hot dogs. That’s all I’ve ever wanted.',
        user_id: 5
    },
    {
        title: "It's the little things in life",
        post_content: 'There’s a lot of beauty in ordinary things. Isn’t that kind of the point?',
        user_id: 4
    },
    {
        title: "You can't make this up",
        post_content: 'My roommate wants to meet everybody. Because I’m pretty sure he thinks I’m making Dwight up. He is very real.',
        user_id: 2
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;