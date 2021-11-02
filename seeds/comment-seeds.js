const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Maybe you should, um, think first.',
        user_id: 4,
        post_id: 1
    },
    {
        comment_text: "And that's the beauty of this office. *smiles at camera*",
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: "My cousin Moes never knows where he's going. But he turned out okay.",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Bears eat beets.",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Hahaha!",
        user_id: 4,
        post_id: 2
    },
    {
        comment_text: "Dwight you're an idiot get back to work.",
        user_id: 3,
        post_id: 2
    },
    {
        comment_text: "Kevin, HR has a neat weight loss incentive.",
        user_id: 6,
        post_id: 3
    },
    {
        comment_text: "You're beautiful. But I'm not implying that you're ordinary or anything! Ok um bye now.",
        user_id: 2,
        post_id: 4
    },
    {
        comment_text: "I think boobs are pretty. Hehehe.",
        user_id: 5,
        post_id: 4
    },
    {
        comment_text: "I'll meet your roommates! Bet they wanna see the ole boss man the most, eh?",
        user_id: 3,
        post_id: 5
    },
    {
        comment_text: "Please fill out a guest form for your roommate.",
        user_id: 6,
        post_id: 5
    },
    {
        comment_text: "OMG please prove it to him! We can't be the only ones who bear the knowledge of Dwight.",
        user_id: 4,
        post_id: 5
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;