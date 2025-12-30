// 1. Select the elements
const modal = document.getElementById("logModal");
const btn = document.getElementById("logBtn");
const span = document.querySelector(".close-btn");

// 2. Open the Modal with Haptic Feedback
btn.onclick = function(e) {
    e.preventDefault(); 
    modal.style.display = "block";

    // Haptic Vibration for mobile (vibrates for 50ms)
    if (window.navigator.vibrate) {
        window.navigator.vibrate(50); 
    }
}

// 3. Close the Modal when clicking the "X"
span.onclick = function() {
    modal.style.display = "none";
}

// 4. Close the Modal if clicking outside the box
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// 5. Accessibility: Close Modal with "Escape" key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
});
