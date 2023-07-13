// BEGIN: 3f4a5b6c7d8e

function generateBlogPost(entry)
{
  //generate outer div
  var postElement = document.createElement('div');
  postElement.classList.add('blog-post');
  postElement.id = entry['id'];

  //generate title
  var titleElement = document.createElement('span');
  titleElement.classList.add('blog-post-title');
  titleElement.textContent = entry['title'];
  postElement.appendChild(titleElement);

  //create a date display
  var dateElement = document.createElement('span');
  dateElement.classList.add('blog-date');
  dateElement.textContent = entry['time'];
  postElement.appendChild(dateElement);

  //add pElement
  var pElement = document.createElement('blockquote');
  pElement.classList.add('blog-content');
  pElement.textContent = entry['content'];
  postElement.appendChild(pElement);

  //add break
  var lineBreak = document.createElement('br');
  postElement.appendChild(lineBreak);

  return postElement;
}

function loadBlogPosts() {
  // Get reference to the post container
  var postContainer = document.querySelector('#blog-container');

  // Load blog posts from local JSON file
  fetch('storage/blogs.json')
    .then(response => response.json())
    .then(entries => {
      
      for (entry of entries) {

        var blog_div = generateBlogPost(entry);

        // Add the post element to the post container
        postContainer.appendChild(blog_div);
      }
    });
}


// Load blog posts on page load
loadBlogPosts();
