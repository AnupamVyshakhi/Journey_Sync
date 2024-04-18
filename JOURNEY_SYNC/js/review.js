const reviewForm = document.getElementById('review-form');
const reviewsContainer = document.getElementById('reviews');

// Simulate getting reviews from a server (replace with your actual data fetching)
const reviews = [
  { name: 'John Doe', review: 'The journey was amazing!' },
  { name: 'Jane Smith', review: 'Great journey.' },
];

// Function to display a review
function displayReview(review) {
  const reviewElement = document.createElement('div');
  reviewElement.classList.add('review');

  const reviewerName = document.createElement('h2');
  reviewerName.textContent = review.name;
  reviewElement.appendChild(reviewerName);

  const reviewText = document.createElement('p');
  reviewText.textContent = review.review;
  reviewElement.appendChild(reviewText);

  // Add rating system here (optional)

  reviewsContainer.appendChild(reviewElement);
}

// Display initial reviews
reviews.forEach(displayReview);

// Handle review form submission
reviewForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const reviewInput = document.getElementById('review');

  const newReview = {
    name: nameInput.value,
    review: reviewInput.value
  };

  // Simulate sending review to server (replace with your actual logic)
  console.log('New review:', newReview);

  // Clear form fields
  nameInput.value = '';
  reviewInput.value = '';

  // Display the new review locally
  displayReview(newReview);
});
