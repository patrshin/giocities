// BEGIN: 3f4a5b6c7d8e

function generateBlogPost(entry)
{
  //generate outer div
  var postElement = document.createElement('div');
  postElement.classList.add('blog-post');
  postElement.id = entry['id'];

  const date = new Date()

  const options = { 
    hour: 'numeric', 
    minute: 'numeric', 
    hour12: true, 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  };

  const dateString = date.toLocaleString('en-US', options);
  console.log(dateString); // Example output: "11:27 AM - June 17, 2022"

  //generate title
  var titleElement = document.createElement('h4');
  titleElement.classList.add('blog-post-title');
  titleElement.textContent = entry['title'];
  postElement.appendChild(titleElement);

  //add pElement
  var pElement = document.createElement('p');
  pElement.textContent = entry['content'];
  postElement.appendChild(pElement);

  //add break
  var lineBreak = document.createElement('br');
  postElement.appendChild(lineBreak);

  //create a date display
  var dateElement = document.createElement('small');
  dateElement.classList.add('blog-date');
  dateElement.textContent = dateString;
  postElement.appendChild(dateElement);

  // Create a delete button for the post
  var deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    // Remove the post element from the DOM
    deleteBlogPost(entry['id']);
    // Remove the post from the JSON file
    //posts = posts.filter(p => p.id !== newId);
    //saveBlogPosts(posts);
  });
  postElement.appendChild(deleteButton);

  return postElement;
}

function loadBlogPosts() {
  // Get reference to the post container
  var postContainer = document.querySelector('#blog-container');

  // Load blog posts from local JSON file
  fetch('../storage/blogs.json')
    .then(response => response.json())
    .then(entries => {
      
      for (entry of entries) {

        var blog_div = generateBlogPost(entry);

        // Add the post element to the post container
        postContainer.appendChild(blog_div);
      }
    });
}

function saveBlogPosts(post) {
  // Save blog posts to local JSON file  
  fetch('../storage/blogs.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: post
  });
}

function submitBlogPost() {
  // Get reference to the form and post container
  var form = document.querySelector('form');

  // Add event listener to the form submit button
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get the post content from the input field
    var postContent = document.querySelector('#post-content').value;

    var postTitle = "Test Title";

    var postDate = new Date();
    var id = postDate.getTime();

    //generate new post object
    var new_post = {
      "id": id,
      "title": postTitle,
      "content": postContent
    };

    //Append the new post element
    fetch('../storage/blogs.json')
    .then(response => response.json())
    .then(entries => {
      
      
      saveBlogPosts(appendToJsonArray(entries, new_post));

    });

  });
}


function deleteBlogPost(post_id) 
{
    //Append the new post element
    fetch('../storage/blogs.json')
    .then(response => response.json())
    .then(entries => {
      
      var new_blog_array;
      for(entry of entries)
      {
        if(entries['id'] != post_id)
        {
          new_blog_array.push(entry);
        }
      }

      saveBlogPosts(new_blog_array);
    });
}

function appendToJsonArray(array, blog) {
  // Append the blog to the parsed JSON array
  array.push(blog);

  // Convert the parsed JSON array back to a string
  var updatedJsonArray = JSON.stringify(array);

  return updatedJsonArray;
}


// Load blog posts on page load
loadBlogPosts();

// Add event listener to the form submit button
submitBlogPost();
// END: 3f4a5b6c7d8e