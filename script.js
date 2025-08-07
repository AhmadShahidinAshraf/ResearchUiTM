// Get all elements with the class 'link-button'
const buttons = document.querySelectorAll('.link-button');
const gifOverlay = document.querySelector('.gif-overlay');

buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        // Prevent the default link behavior (navigating immediately)
        event.preventDefault();
        
        // Get the URL from the button's href attribute
        const targetUrl = this.href;

        // Show the GIF overlay
        gifOverlay.style.display = 'flex';

        // Wait for 2 seconds (2000 milliseconds) and then navigate
        setTimeout(function() {
            window.location.href = targetUrl;
        }, 2000); // Change this number to adjust the delay
    });
});
