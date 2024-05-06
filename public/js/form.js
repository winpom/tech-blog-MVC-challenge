document.addEventListener('DOMContentLoaded', () => {
    // post logic

    // button to reveal post form
    const newPostButton = document.getElementById('newPostBtn');
    if (newPostButton) {
        newPostButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default behavior of the button
            document.getElementById('postForm').style.display = 'block'; // Show post form
        });
    }

    //post form submission
    const submitPostButton = document.getElementById('submitPostBtn');
    if (submitPostButton) {
        submitPostButton.addEventListener('click', async (event) => {
            event.preventDefault();
            const title = document.getElementById('postTitle').value;
            const content = document.getElementById('postContent').value;

            try {
                const response = await fetch(`/api/post`, { // Update the URL to match your server-side route
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title,
                        content,
                    }),
                });

                if (response.ok) {
                    alert('Post added successfully!');
                    window.location.reload();
                } else {
                    alert('Failed to add post.');
                }
            } catch (error) {
                console.error('Error adding post:', error);
                alert('An error occurred. Please try again.');
            }
        });
    }

    // post deletion
    document.addEventListener('click', async (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const postId = event.target.dataset.postId;

            try {
                const response = await fetch(`/api/post/${postId}`, { // Update the URL to match your server-side route
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    alert('Post deleted successfully!');
                    window.location.reload();
                } else {
                    alert('Failed to delete post.');
                }
            } catch (error) {
                console.error('Error deleting post:', error);
                alert('An error occurred. Please try again.');
            }
        }
    });

    // new comment logic

    // button to reveal comment form
    const newCommentButton = document.getElementById('newCommentBtn');
    if (newCommentButton) {
        newCommentButton.addEventListener('click', (event) => {
            event.preventDefault();
            document.getElementById('commentForm').style.display = 'block';
        });
    }

    //comment form submission
    const submitCommentButton = document.getElementById('submitCommentBtn');
    if (submitCommentButton) {
        submitCommentButton.addEventListener('click', async (event) => {
            event.preventDefault(); // Prevent the default behavior of the button
            const content = document.getElementById('commentContent').value;

            const postId = window.location.pathname.split('/').pop(); // Extract postId from URL
            try {
                const response = await fetch(`/api/comment/${postId}`, { // Update the URL to include the postId
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        content,
                    }),
                });

                if (response.ok) {
                    alert('Comment added successfully!');
                    window.location.reload();
                } else {
                    alert('Failed to add comment.');
                }
            } catch (error) {
                console.error('Error adding comment:', error);
                alert('An error occurred. Please try again.');
            }
        });
    }
});
