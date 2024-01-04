// script.js
document.addEventListener('DOMContentLoaded', function () {
    const countdownElement = document.getElementById('countdown');

    function updateCountdown() {
        const now = new Date();
        const options = { timeZone: 'America/Bogota' };
        const newYearDate = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0, 0).toLocaleString('en-US', options);

        const timeDifference = new Date(newYearDate) - now;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (timeDifference <= 0) {
            // If countdown reaches zero (midnight), trigger animations
            celebrateNewYear();
        }
    }

    function celebrateNewYear() {
        // Add your celebration animations using GSAP or any other animation library
        gsap.to("#countdown", { opacity: 0, duration: 1 });
        gsap.from("#celebration-message", { opacity: 0, y: -50, duration: 1 });

        // You can add more animations or celebrations as needed
        // ...

        // Display a celebration message
        document.getElementById('celebration-message').style.display = 'block';
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});
