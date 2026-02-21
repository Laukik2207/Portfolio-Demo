document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const heroSection = document.getElementById('hero');
    const aboutSection = document.getElementById('about');
    const statsSection = document.getElementById('stats');

    const startBtn = document.getElementById('start-btn');
    const viewStatsBtn = document.getElementById('view-stats-btn');
    const backBtn = document.getElementById('back-btn');

    const statBars = document.querySelectorAll('.progress-bar');

    // Transitions
    function switchSection(hideSection, showSection) {
        // Fade out
        hideSection.classList.remove('active');
        hideSection.classList.add('hidden');

        // Wait for transition to finish before showing next
        setTimeout(() => {
            hideSection.style.display = 'none'; // Ensure it doesn't block clicks

            showSection.style.display = 'flex'; // Prepare to show
            // Small delay to allow display change to register before opacity transition
            setTimeout(() => {
                showSection.classList.remove('hidden');
                showSection.classList.add('active');

                // Trigger animations if entering stats
                if (showSection === statsSection) {
                    animateStats();
                }
                if (showSection === aboutSection) {
                    setTimeout(() => animateCpStats(), 1800); // Wait for section animations
                }
                // Reset stats if leaving stats (optional, for replayability)
                if (hideSection === statsSection) {
                    resetStats();
                }
                if (hideSection === aboutSection) {
                    resetCpStats();
                }
            }, 50);
        }, 800); // Matches CSS transition time
    }

    const cpStatBars = document.querySelectorAll('.cp-progress-bar');

    // Stat Animation
    function animateStats() {
        statBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            bar.style.width = targetWidth;
        });
    }

    function resetStats() {
        statBars.forEach(bar => {
            bar.style.width = '0%';
        });
    }

    function animateCpStats() {
        cpStatBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            bar.style.width = targetWidth;
        });
    }

    function resetCpStats() {
        cpStatBars.forEach(bar => {
            bar.style.width = '0%';
        });
    }

    // Event Listeners
    startBtn.addEventListener('click', () => {
        switchSection(heroSection, aboutSection);
    });

    viewStatsBtn.addEventListener('click', () => {
        switchSection(aboutSection, statsSection);
    });

    backBtn.addEventListener('click', () => {
        switchSection(statsSection, heroSection);
    });

    // Initial Setup
    // Ensure only hero is visible and others are hidden/display:none
    aboutSection.style.display = 'none';
    statsSection.style.display = 'none';
});
