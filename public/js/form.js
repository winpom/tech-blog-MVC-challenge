const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    const username = document.getElementById('usernameInput').value;
    const title = document.getElementById('titleInput').value;
    const content = document.getElementById('contentInput').value;

    // Stop execution if any field is empty
    if (username.trim() === '' || title.trim() === '' || content.trim() === '') {
        alert('Please fill out all fields before submitting.');
        return; 
    }

    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    const newBlogPost = {
        username: username,
        title: title,
        content: content,
    };

    blogPosts.push(newBlogPost);

    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    alert('Blog post submitted successfully!');

    window.location.href = 'blog.html';
})