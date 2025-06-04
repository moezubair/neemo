
// Set the target date: December 30, 2024 at 1:15 PM
const lastSeenDate = new Date('2024-12-30T13:15:00');

function updateTimer() {
    const now = new Date();
    const timeDifference = now - lastSeenDate;
    
    // Calculate time units
    const totalSeconds = Math.floor(timeDifference / 1000);
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;
    
    // Update the display
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    
    // Update total time
    const totalTimeElement = document.getElementById('totalTime');
    if (days > 0) {
        totalTimeElement.textContent = `Total: ${totalSeconds.toLocaleString()} seconds (${days} days)`;
    } else {
        totalTimeElement.textContent = `Total: ${totalSeconds.toLocaleString()} seconds`;
    }
    
    // Update progress bar (cycles every 60 seconds)
    const progressPercent = (seconds / 60) * 100;
    document.getElementById('progressFill').style.width = `${progressPercent}%`;
    
    // Add subtle animation to numbers when they change
    const timeElements = ['days', 'hours', 'minutes', 'seconds'];
    timeElements.forEach(id => {
        const element = document.getElementById(id);
        element.style.transform = 'scale(1.05)';
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 150);
    });
}

// Add smooth transitions
document.addEventListener('DOMContentLoaded', function() {
    const timeElements = document.querySelectorAll('.number');
    timeElements.forEach(element => {
        element.style.transition = 'transform 0.15s ease';
    });
    
    // Start the timer
    updateTimer();
    setInterval(updateTimer, 1000);
});

// Add some interactive effects
document.querySelectorAll('.time-unit').forEach(unit => {
    unit.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    unit.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Create floating hearts
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '💕';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
    
    document.body.appendChild(heart);
    
    // Remove heart after animation completes
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 7000);
}

// Create hearts periodically
setInterval(createFloatingHeart, 800);

// Create initial hearts
for (let i = 0; i < 5; i++) {
    setTimeout(createFloatingHeart, i * 200);
}
