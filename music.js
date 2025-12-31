document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.querySelector('.play-pause');
    const prevBtn = document.querySelector('.prev-song');
    const nextBtn = document.querySelector('.next-song');
    const progressBar = document.querySelector('.progress');
    const currentTimeDisplay = document.querySelector('.current-time');
    const durationDisplay = document.querySelector('.duration');

    // Check if audio player exists
    if (!audioPlayer) {
        console.warn('Audio player not found on this page');
        return;
    }

    function togglePlayPause() {
        if (audioPlayer.paused || audioPlayer.ended) {
            audioPlayer.play();
            playPauseBtn.innerHTML = '&#10074;&#10074;'; // Pause symbol
            playPauseBtn.setAttribute('aria-label', 'Pause');
        } else {
            audioPlayer.pause();
            playPauseBtn.innerHTML = '&#9658;'; // Play symbol
            playPauseBtn.setAttribute('aria-label', 'Play');
        }
    }

    function updateProgress() {
        if (progressBar && audioPlayer.duration) {
            const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            progressBar.value = progress;
        }
        if (currentTimeDisplay) {
            currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
        }
    }

    function setProgress() {
        if (progressBar && audioPlayer.duration) {
            const newTime = (progressBar.value / 100) * audioPlayer.duration;
            audioPlayer.currentTime = newTime;
        }
    }

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    function updateDuration() {
        if (durationDisplay && audioPlayer.duration) {
            durationDisplay.textContent = formatTime(audioPlayer.duration);
        }
    }

    // Event listeners
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', togglePlayPause);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            console.log('Playing previous song');
            // Implement playlist logic here
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            console.log('Playing next song');
            // Implement playlist logic here
        });
    }

    if (progressBar) {
        progressBar.addEventListener('input', setProgress);
    }

    // Audio events
    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('loadedmetadata', updateDuration);
    audioPlayer.addEventListener('ended', function() {
        playPauseBtn.innerHTML = '&#9658;';
        playPauseBtn.setAttribute('aria-label', 'Play');
    });

    // Keyboard controls
    document.addEventListener('keydown', function(e) {
        if (e.code === 'Space') {
            e.preventDefault();
            togglePlayPause();
        }
    });
});