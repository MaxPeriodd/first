document.addEventListener('DOMContentLoaded', function() {
    const ratingContainer = document.querySelector('.rating');
    const stars = document.querySelectorAll('.star');
    const ratingValueDisplay = document.getElementById('rating-value');
    let currentRating = 0;

    function highlightStars(value) {
      stars.forEach(star => {
        star.classList.toggle('hovered', parseInt(star.dataset.value) <= value);
      });
    }

    ratingContainer.addEventListener('mouseover', function(event) {
      if (event.target.classList.contains('star')) {
        highlightStars(parseInt(event.target.dataset.value));
      }
    });

    ratingContainer.addEventListener('mouseout', function() {
      highlightStars(currentRating);
    });

    ratingContainer.addEventListener('click', function(event) {
      if (event.target.classList.contains('star')) {
        currentRating = parseInt(event.target.dataset.value);
        ratingValueDisplay.textContent = currentRating;
        highlightStars(currentRating);
      }
    });
  });
