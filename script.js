// Sample data for forum posts 
const posts = [
    {
        id: 1,
        title: 'Cardiovascular Endurance',
        content: 'Cardiovascular endurance is how well the body can perform moderate aerobic activities. It is when the heart...',
        author: 'Akash',
        category: 'Fitness Tips',
        votes: 0
    },
    {
        id: 2,
        title: 'Muscular Strength',
        content: 'Muscular strength refers to the amount of force a muscle can produce with a single maximal effort. The size of your muscle fibers...',
        author: 'Kritika',
        category: 'Fitness Tips',
        votes: 0
    },
    {
        id: 3,
        title: 'Flexibility',
        content: 'The quality of being easily adapted or of offering many different options...',
        author: 'Aman',
        category: 'Fitness Tips',
        votes: 0
    },
    {
        id: 4,
        title: 'Agility',
        content: 'Ability to change the direction of the body in an efficient and effective manner, which requires a...',
        author: 'Sanskriti',
        category: 'Fitness Tips',
        votes: 0
    },
];

// Function to display forum posts with upvote and downvote buttons
function displayPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = ''; // Clear existing posts

    posts.forEach(post => {
        const postElement = document.createElement('li');
        postElement.innerHTML = `
            <div class="post">
              <h2><a href="#">${post.title}</a></h2>
              <p>${post.content}</p>
              <div class="post-meta">
                <span class="author">Posted by: ${post.author}</span>
                <span class="category">Category: ${post.category}</span>
                <div class="votes">
                    <button class="upvote" data-id="${post.id}">Upvote</button>
                    <span class="vote-count">${post.votes}</span>
                    <button class="downvote" data-id="${post.id}">Downvote</button>
                </div>
              </div>
            </div>
        `;

        // Add event listeners for upvote and downvote buttons
        const upvoteButton = postElement.querySelector('.upvote');
        upvoteButton.addEventListener('click', () => {
            const postId = parseInt(upvoteButton.getAttribute('data-id'));
            const post = posts.find(p => p.id === postId);
            if (post) {
                post.votes++;
                updateVoteCount(postElement, post.votes);
            }
        });

        const downvoteButton = postElement.querySelector('.downvote');
        downvoteButton.addEventListener('click', () => {
            const postId = parseInt(downvoteButton.getAttribute('data-id'));
            const post = posts.find(p => p.id === postId);
            if (post) {
                post.votes--;
                updateVoteCount(postElement, post.votes);
            }
        });

        postsContainer.appendChild(postElement);
    });
}

// Function to update the vote count in the DOM
function updateVoteCount(postElement, voteCount) {
    const voteCountElement = postElement.querySelector('.vote-count');
    if (voteCountElement) {
        voteCountElement.textContent = voteCount;
    }
}

// Event listener to load posts and handle upvotes/downvotes when the page loads
window.addEventListener('load', displayPosts);







