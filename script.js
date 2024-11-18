// script.js
function changeText() {
    const welcomeText = document.getElementById("welcome-text");
    const button = document.getElementById("change-text-btn");
    
    // Change text content
    welcomeText.innerText = "JavaScript is Dynamic and Fun!";
    
    // Add a pulsating animation
    welcomeText.classList.add("pulse-animation");
    
    // Change button color randomly
    button.style.backgroundColor = getRandomColor();
  }
  
  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const message="Welcome to JavaScript";
  let index=0;
  // function to display a character at a time
  function typeEffect(){
    if(index < message.length){
      document.getElementById("welcomeMessage").innerHTML += message.charAt(index);
    index++;
    setTimeout(typeEffect, 100); // Adjust delay for typing speed
    }
  }
// Start typing effect
typeEffect();
// Select the toggle button and body element
const toggleButton = document.getElementById('themeToggle');
const body = document.body;

// Add event listener for the toggle button
toggleButton.addEventListener('click', () => {
  // Toggle the dark-theme class on the body
  body.classList.toggle('dark-theme');

  // Update button text based on the theme
  if (body.classList.contains('dark-theme')) {
    toggleButton.textContent = 'Switch to Light Mode';
  } else {
    toggleButton.textContent = 'Switch to Dark Mode';
  }
});