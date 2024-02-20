// JavaScript
function toggleArrowVisibility() {
  var arrowButton = document.querySelector('.floating-arrow-container');
  var aboutSection = document.getElementById('about');

  // Get the top and bottom positions of the About section relative to the document
  var aboutSectionTop = aboutSection.offsetTop;
  var aboutSectionBottom = aboutSectionTop + aboutSection.offsetHeight;

  // Get the current scroll position
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // If the scroll position is within the About section, show the arrow button
  if (scrollTop >= aboutSectionTop && scrollTop <= aboutSectionBottom) {
      arrowButton.classList.remove('arrow-hidden'); // Show arrow button
  } else {
      // Otherwise, hide the arrow button
      arrowButton.classList.add('arrow-hidden');
  }
}

// Add event listener to window scroll event to trigger the function
window.addEventListener('scroll', toggleArrowVisibility);

// Call the function on page load to initialize the arrow visibility
toggleArrowVisibility();
// JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Get the viewport height
  var vh = window.innerHeight * 0.01;
  // Set the custom property value
  document.documentElement.style.setProperty('--vh', vh + 'px');
});

function adjustViewportHeight() {
  // Get the viewport height
  var vh = window.innerHeight * 0.01;
  // Set the custom property value
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

// Add event listener to the About section link to adjust viewport height when clicked
document.getElementById('about').addEventListener('click', function() {
  // Call the function to adjust viewport height
  adjustViewportHeight();
});

// Add event listener to window resize event to adjust viewport height when resized
window.addEventListener('resize', function() {
  // Call the function to adjust viewport height
  adjustViewportHeight();
});
