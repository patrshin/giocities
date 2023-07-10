    // Get references to the form and post container
    var form = document.querySelector('form');
    var postContainer = document.querySelector('#post-container');

    // Add event listener to the form submit button
form.addEventListener('submit', function(event) {

    console.log("Hello");
    event.preventDefault(); // Prevent form from submitting
    var postContent = document.querySelector('#post-content').value;
    if (postContent) {
        // Create a new post element
        var postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.textContent = postContent;

        // Create a delete button for the post
        var deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
        postElement.remove();
        });
        postElement.appendChild(deleteButton);

        // Add the post element to the post container
        postContainer.appendChild(postElement);

        // Clear the input field
        document.querySelector('#post-content').value = '';
    }
});