document.addEventListener('DOMContentLoaded', () => {
    // new post logic
    const newPostButton = document.getElementById('newPostBtn');
    if (newPostButton) {
        newPostButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default behavior of the button
            document.getElementById('postForm').style.display = 'block'; // Show post form
        });
    }

    // new comment logic
    const newCommentButton = document.getElementById('newCommentBtn');
    if (newCommentButton) {
        newCommentButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default behavior of the button
            document.getElementById('commentForm').style.display = 'block'; // Show comment form
        });
    }

    const submitCommentButton = document.getElementById('submitComment');
    if (submitCommentButton) {
        submitCommentButton.addEventListener('click', async (event) => {
            event.preventDefault(); // Prevent the default behavior of the button
            const content = document.getElementById('commentContent').value;
            const postId = window.location.pathname.split('/').pop(); // Extract postId from URL

            try {
                const response = await fetch(`/api/comment/new`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        content,
                        post_id: postId, // Include the post_id in the request body
                        // user_id: YOUR_USER_ID_HERE, // Include the user_id in the request body
                    }),
                });

                if (response.ok) {
                    alert('Comment added successfully!');
                    // Dynamically update the comment section here instead of reloading the page
                    // window.location.reload(); 
                } else {
                    alert('Failed to add comment.');
                }
            } catch (error) {
                console.error('Error adding comment:', error);
                alert('An error occurred. Please try again.');
            }
        });
    }

    const submitPostButton = document.getElementById('submitPost');
    if (submitPostButton) {
        submitPostButton.addEventListener('click', async (event) => {
            event.preventDefault(); // Prevent the default behavior of the button
            const title = document.getElementById('postTitle').value;
            const content = document.getElementById('postContent').value;

            try {
                const response = await fetch(`/api/post/new`, {
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
                    // Dynamically update the post section here instead of reloading the page
                    // window.location.reload(); 
                } else {
                    alert('Failed to add post.');
                }
            } catch (error) {
                console.error('Error adding post:', error);
                alert('An error occurred. Please try again.');
            }
        });
    }
});