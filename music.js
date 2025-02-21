document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.querySelector('.play-pause');
    const prevBtn = document.querySelector('.prev-song');
    const nextBtn = document.querySelector('.next-song');

    function togglePlayPause() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.innerHTML = '&#10074;&#10074;';
        } else {
            audioPlayer.pause();
            playPauseBtn.innerHTML = '&#9658;';
        }
    }

    playPauseBtn.addEventListener('click', togglePlayPause);
    prevBtn.addEventListener('click', function () {
        console.log('Playing previous song');
    });

    nextBtn.addEventListener('click', function () {
        console.log('Playing next song');
    });

});