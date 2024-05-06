const router = require('express').Router();
const { Comment } = require('../../models');

// Create a new comment
router.post('/:post_id', async (req, res) => {
    try {
        const newComment = await Comment.create({
            content: req.body.content,
            user_id: req.session.user_id,
            post_id: req.params.post_id,
        });

        res.status(200).json(newComment);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Get a specific comment by ID
router.get('/:comment_id', async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.comment_id);

        if (!comment) {
            res.status(404).json({ message: 'Comment not found' });
            return;
        }

        res.status(200).json(comment);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Delete a comment
router.delete('/:comment_id', async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.comment_id);

        if (!comment) {
            res.status(404).json({ message: 'Comment not found' });
            return;
        }

        await comment.destroy();
        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Update a comment
router.put('/:comment_id', async (req, res) => {
    try {
        const comment = await Comment.findByPk(req.params.comment_id);

        if (!comment) {
            res.status(404).json({ message: 'Comment not found' });
            return;
        }

        comment.content = req.body.content;
        await comment.save();

        res.status(200).json({ message: 'Comment updated successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
